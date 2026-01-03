import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X, Send, ExternalLink, User, Mail, Phone, Globe } from 'lucide-react';
import { translations } from '../locales/translations';

const Chatbot = () => {
    const { language } = useLanguage(); // Only use language for default init
    const [isOpen, setIsOpen] = useState(false);

    // Open chatbot automatically on load
    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);
    const [step, setStep] = useState('details'); // 'details' | 'chat'
    const [userData, setUserData] = useState({ name: '', email: '', phone: '', language: 'en' });
    const [currentLeadId, setCurrentLeadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const whatsappLink = "https://wa.me/352661167725?text=Hi,%20I%20need%20help%20with%20details%20about%20your%20business";

    // Helper for local translations based on selected language
    const localT = (key) => {
        const langCode = userData.language ? userData.language.split('-')[0] : 'en';
        const keys = key.split('.');
        let current = translations[langCode];

        // Safety fallback to english if language missing
        if (!current) current = translations['en'];

        for (const k of keys) {
            if (current && current[k]) {
                current = current[k];
            } else {
                // Fallback to English if key missing in selected lang
                let fallback = translations['en'];
                for (const fk of keys) {
                    if (fallback && fallback[fk]) fallback = fallback[fk];
                    else return key;
                }
                return fallback || key;
            }
        }
        return current;
    };

    // Initialize state from localStorage or context
    useEffect(() => {
        const savedUser = localStorage.getItem('luxio_chat_user');
        if (savedUser) {
            const parsed = JSON.parse(savedUser);
            setUserData(parsed);
            const savedLeadId = localStorage.getItem('luxio_chat_lead_id');
            if (savedLeadId) setCurrentLeadId(savedLeadId);
            setStep('chat');
        } else {
            // Default to website language if no user data saved
            setUserData(prev => ({ ...prev, language: language ? language.split('-')[0] : 'en' }));
        }
    }, []); // Run once on mount

    // Update language if context changes AND user hasn't explicitly set it (only if still on details step)
    useEffect(() => {
        if (step === 'details' && !localStorage.getItem('luxio_chat_user')) {
            setUserData(prev => ({ ...prev, language: language ? language.split('-')[0] : 'en' }));
        }
    }, [language, step]);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Create lead in DB
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...userData,
                    query: 'Chatbot Initialization',
                    source: 'chatbot'
                })
            });

            if (response.ok) {
                const lead = await response.json();
                setCurrentLeadId(lead.id);
                localStorage.setItem('luxio_chat_user', JSON.stringify(userData));
                localStorage.setItem('luxio_chat_lead_id', lead.id);
                setStep('chat');
                setMessages([
                    {
                        role: 'bot',
                        text: localT('chatbot.welcome'),
                        options: [
                            { label: localT('chatbot.options.services'), query: 'services' },
                            { label: localT('chatbot.options.pricing'), query: 'pricing' },
                            { label: localT('chatbot.options.contact'), query: 'contact' },
                            { label: localT('chatbot.options.caseStudies'), query: 'case studies' }
                        ]
                    }
                ]);
            }
        } catch (error) {
            console.error('Error creating lead:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCallbackSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Re-create or update lead in DB with Urgent status
            // We append stars to name to create visual importance in Admin without schema changes
            const urgentName = `⭐⭐⭐ ${userData.name}`;
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...userData,
                    name: urgentName,
                    query: 'URGENT CALLBACK REQUEST',
                    source: 'chatbot_priority'
                })
            });

            if (response.ok) {
                // Return to chat with confirmation
                setStep('chat');
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: `✅ REQUEST RECEIVED! \n\nWe have marked your request as PRIORITY ⭐⭐⭐. \nOur team will call you at ${userData.phone} very shortly.`
                }]);
            }
        } catch (error) {
            console.error('Error requesting callback:', error);
            setMessages(prev => [...prev, { role: 'bot', text: localT('chatbot.error') }]);
            setStep('chat');
        } finally {
            setIsLoading(false);
        }
    };

    const navigate = useNavigate();

    const handleOptionClick = (query) => {
        if (query.toLowerCase().includes('whatsapp')) {
            window.open(whatsappLink, '_blank', 'noopener,noreferrer');
            return;
        }

        // Handle Redirects based on special query keywords from DB
        if (query === 'quote_redirect') {
            navigate('/contact');
            setIsOpen(false); // Close chat on redirect? Or keep open? Usually close or minimize.
            return;
        }
        if (query === 'view_locations_redirect') {
            navigate('/solutions');
            return;
        }
        if (query === 'launch_campaign_redirect') {
            navigate('/projects');
            return;
        }
        if (query === 'callback_request') {
            setStep('callback_form'); // New step for callback
            return;
        }

        setInput(query);
        // We can't easily dispatch, so we'll just call the send logic manually or trigger a state change that calls it.
        // Easier: setInput then timeout to submit form button click
        setTimeout(() => {
            const submitBtn = document.querySelector('button[type="submit"].chat-send-btn');
            if (submitBtn) submitBtn.click();
        }, 100);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg,
                    language: userData.language || (language ? language.split('-')[0] : 'en'),
                    lead_id: currentLeadId
                })
            });

            const data = await response.json();

            if (data.response) {
                setMessages(prev => [...prev, { role: 'bot', text: data.response, options: data.options, showWhatsapp: data.showWhatsapp }]);
            } else {
                // Fallback to WhatsApp
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: localT('chatbot.fallback'),
                    isFallback: true
                }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: localT('chatbot.error') }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-[font1]">
            {/* Trigger Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#D3FD50] hover:bg-[#b8e040] text-black rounded-full p-4 shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
                >
                    <MessageCircle size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-[350px] sm:w-[380px] h-[500px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">

                    {/* Header */}
                    <div className="bg-[#D3FD50] p-4 flex justify-between items-center text-black">
                        <h3 className="font-[font2] uppercase tracking-wider font-bold">{localT('chatbot.title')}</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full text-black">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-4 bg-zinc-900 text-white custom-scrollbar relative">

                        {step === 'details' ? (
                            <div className="h-full flex flex-col justify-center gap-6">
                                <div className="text-center space-y-2">
                                    <h4 className="text-xl font-[font2] uppercase text-white">{localT('chatbot.welcomeTitle')}</h4>
                                    <p className="text-zinc-400 text-sm">{localT('chatbot.detailsPrompt')}</p>
                                </div>
                                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="text"
                                            placeholder={localT('chatbot.namePlaceholder')}
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.name}
                                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="email"
                                            placeholder={localT('chatbot.emailPlaceholder')}
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.email}
                                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="tel"
                                            placeholder={localT('chatbot.phonePlaceholder')}
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.phone}
                                            onChange={e => setUserData({ ...userData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <select
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none transition-colors appearance-none text-zinc-300"
                                            value={userData.language}
                                            onChange={e => setUserData({ ...userData, language: e.target.value })}
                                        >
                                            <option value="en">English</option>
                                            <option value="fr">Français</option>
                                            <option value="de">Deutsch</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#D3FD50] text-black font-bold py-2.5 rounded-lg hover:bg-[#cbf446] transition-colors disabled:opacity-50"
                                    >
                                        {isLoading ? localT('chatbot.connecting') : localT('chatbot.startChat')}
                                    </button>
                                </form>
                            </div>
                        ) : step === 'callback_form' ? (
                            <div className="h-full flex flex-col justify-center gap-6 animate-in fade-in zoom-in duration-300">
                                <div className="text-center space-y-2">
                                    <h4 className="text-xl font-[font2] uppercase text-white">📞 {localT('chatbot.requestCallback')}</h4>
                                    <p className="text-zinc-400 text-sm">Please confirm your details for a priority callback.</p>
                                </div>
                                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none"
                                            value={userData.name}
                                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-base focus:border-[#D3FD50] focus:outline-none"
                                            value={userData.phone}
                                            onChange={e => setUserData({ ...userData, phone: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#D3FD50] text-black font-bold py-2.5 rounded-lg hover:bg-[#cbf446] transition-colors"
                                    >
                                        {isLoading ? 'Sending...' : 'Request Priority Callback'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep('chat')}
                                        className="w-full text-zinc-500 text-xs hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {messages.map((msg, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.role === 'user'
                                                ? 'bg-[#D3FD50] text-black rounded-tr-none'
                                                : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                                {(msg.isFallback || msg.showWhatsapp) && (
                                                    <a
                                                        href={whatsappLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="mt-3 flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors font-bold text-xs no-underline pointer-events-auto cursor-pointer"
                                                    >
                                                        <MessageCircle size={14} fill="white" />
                                                        {localT('chatbot.whatsapp')}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        {msg.options && (
                                            <div className="flex flex-wrap gap-2 mb-2 ml-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                {msg.options.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleOptionClick(opt.query)}
                                                        className="bg-zinc-800 hover:bg-zinc-700 text-[#D3FD50] border border-[#D3FD50]/30 text-xs px-3 py-1.5 rounded-full transition-colors"
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-zinc-800 rounded-xl rounded-tl-none p-3 flex gap-1">
                                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {step === 'chat' && (
                        <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder={localT('chatbot.placeholder')}
                                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-base text-white focus:border-[#D3FD50] focus:outline-none"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    inputMode="text"
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="chat-send-btn p-2 bg-[#D3FD50] text-black rounded-lg hover:bg-[#cbf446] disabled:opacity-50 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Chatbot;
