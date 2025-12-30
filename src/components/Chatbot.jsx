import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X, Send, ExternalLink, User, Mail, Phone } from 'lucide-react';

const Chatbot = () => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('details'); // 'details' | 'chat'
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
    const [currentLeadId, setCurrentLeadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Check if user info is already saved in localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('luxio_chat_user');
        const savedLeadId = localStorage.getItem('luxio_chat_lead_id');
        if (savedUser) {
            setUserData(JSON.parse(savedUser));
            if (savedLeadId) setCurrentLeadId(savedLeadId);
            setStep('chat');
        }
    }, []);

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
                    language: language,
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
                    { role: 'bot', text: t('chatbot.welcome') }
                ]);
            }
        } catch (error) {
            console.error('Error creating lead:', error);
        } finally {
            setIsLoading(false);
        }
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
                    language: language.split('-')[0], // 'en-US' -> 'en'
                    lead_id: currentLeadId
                })
            });

            const data = await response.json();

            if (data.response) {
                setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
            } else {
                // Fallback to WhatsApp
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: t('chatbot.fallback'),
                    isFallback: true
                }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting. Please try again later.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const whatsappLink = "https://wa.me/33123456789"; // Replace with actual number

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
                        <h3 className="font-[font2] uppercase tracking-wider font-bold">Luxio Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full text-black">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-4 bg-zinc-900 text-white custom-scrollbar relative">

                        {step === 'details' ? (
                            <div className="h-full flex flex-col justify-center gap-6">
                                <div className="text-center space-y-2">
                                    <h4 className="text-xl font-[font2] uppercase text-white">Welcome</h4>
                                    <p className="text-zinc-400 text-sm">Please provide your details to start chatting.</p>
                                </div>
                                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.name}
                                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.email}
                                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-zinc-500" size={16} />
                                        <input
                                            type="tel"
                                            placeholder="Phone (Optional)"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-[#D3FD50] focus:outline-none transition-colors"
                                            value={userData.phone}
                                            onChange={e => setUserData({ ...userData, phone: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-[#D3FD50] text-black font-bold py-2.5 rounded-lg hover:bg-[#cbf446] transition-colors disabled:opacity-50"
                                    >
                                        {isLoading ? 'Connecting...' : 'Start Chat'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.role === 'user'
                                            ? 'bg-[#D3FD50] text-black rounded-tr-none'
                                            : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                            {msg.isFallback && (
                                                <a
                                                    href={whatsappLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="mt-3 flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors font-bold text-xs no-underline"
                                                >
                                                    <MessageCircle size={14} fill="white" />
                                                    Chat on WhatsApp
                                                </a>
                                            )}
                                        </div>
                                    </div>
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
                                    placeholder="Type a message..."
                                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:border-[#D3FD50] focus:outline-none"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="p-2 bg-[#D3FD50] text-black rounded-lg hover:bg-[#cbf446] disabled:opacity-50 transition-colors"
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
