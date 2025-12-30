import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, XCircle, Clock, MessageSquare, Users, FileText, LayoutDashboard, LogOut, Search } from 'lucide-react';

const Admin = () => {
    const [user, setUser] = useState(null);
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [activeTab, setActiveTab] = useState('chatbot'); // 'chatbot', 'history', 'direct'
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const savedUser = localStorage.getItem('luxio_admin');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user, activeTab]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            let url = '';
            if (activeTab === 'chatbot') url = '/api/leads?source=chatbot';
            else if (activeTab === 'direct') url = '/api/leads?source=contact_form';
            else if (activeTab === 'history') url = '/api/admin/chat-history';

            const res = await fetch(url);
            if (res.ok) {
                const result = await res.json();
                setData(result);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (res.ok) {
                const resData = await res.json();
                setUser(resData.user);
                localStorage.setItem('luxio_admin', JSON.stringify(resData.user));
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                setData(data.map(item => item.id === id ? { ...item, status: newStatus } : item));
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('luxio_admin');
        setUser(null);
        setData([]);
    };

    // Render Login View
    if (!user) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-white text-center mb-2 uppercase tracking-wide">Admin Portal</h2>
                    <p className="text-zinc-500 text-center mb-8 text-sm">Secure Access Verification</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Admin Email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-white focus:border-[#D3FD50] focus:outline-none transition-all placeholder:text-zinc-600"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-white focus:border-[#D3FD50] focus:outline-none transition-all placeholder:text-zinc-600"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#D3FD50] text-black font-bold p-3 rounded-lg hover:bg-[#cbf446] transition-colors disabled:opacity-50 mt-4"
                        >
                            {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Login to Dashboard'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Process History Data for better view
    const groupHistoryByLead = (historyData) => {
        const grouped = {};
        historyData.forEach(log => {
            if (!grouped[log.lead_id]) {
                grouped[log.lead_id] = { name: log.name, email: log.email, messages: [] };
            }
            grouped[log.lead_id].messages.push(log);
        });
        return Object.entries(grouped);
    };

    // Render Dashboard
    return (
        <div className="flex h-screen bg-black overflow-hidden font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
                <div className="p-6 border-b border-zinc-800">
                    <h1 className="text-[#D3FD50] font-bold text-xl uppercase tracking-wider">Luxio Admin</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('chatbot')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'chatbot' ? 'bg-[#D3FD50] text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                    >
                        <MessageSquare size={20} />
                        Chatbot Leads
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'history' ? 'bg-[#D3FD50] text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                    >
                        <FileText size={20} />
                        Chat History
                    </button>
                    <button
                        onClick={() => setActiveTab('direct')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'direct' ? 'bg-[#D3FD50] text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                    >
                        <Users size={20} />
                        Direct Customers
                    </button>
                </nav>

                <div className="p-4 border-t border-zinc-800">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                            <UserIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm truncate font-medium">{user.email}</p>
                            <p className="text-zinc-500 text-xs capitalize">{user.role}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 text-red-400 hover:text-red-300 px-4 py-2 hover:bg-red-500/10 rounded-lg transition-colors text-sm"
                    >
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="bg-zinc-900 border-b border-zinc-800 p-6 flex justify-between items-center">
                    <h2 className="text-2xl text-white font-bold uppercase tracking-tight">
                        {activeTab === 'chatbot' && 'Chatbot Leads'}
                        {activeTab === 'history' && 'Conversation Logs'}
                        {activeTab === 'direct' && 'Direct Form Submissions'}
                    </h2>
                    <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-400 w-64">
                        <Search size={16} />
                        <span className="text-sm">Search records...</span>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-auto p-6 bg-black">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="animate-spin text-[#D3FD50]" size={40} />
                        </div>
                    ) : (
                        activeTab !== 'history' ? (
                            // Leads Tables
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                                <table className="w-full text-left text-sm text-zinc-400">
                                    <thead className="bg-zinc-950 text-xs uppercase font-medium text-zinc-500">
                                        <tr>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Name</th>
                                            <th className="px-6 py-4">Contact Info</th>
                                            <th className="px-6 py-4">Context / Query</th>
                                            <th className="px-6 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800 text-zinc-300">
                                        {data.map((lead) => (
                                            <tr key={lead.id} className="hover:bg-zinc-800/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${lead.status === 'verified' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                                                        lead.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                                                            'bg-red-500/10 text-red-500 border border-red-500/20'
                                                        }`}>
                                                        {lead.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>{new Date(lead.created_at).toLocaleDateString()}</div>
                                                    <div className="text-xs text-zinc-600">{new Date(lead.created_at).toLocaleTimeString()}</div>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                                                <td className="px-6 py-4">
                                                    <div className="text-white hover:text-[#D3FD50] transition-colors cursor-pointer">{lead.email}</div>
                                                    <div className="text-xs">{lead.phone}</div>
                                                </td>
                                                <td className="px-6 py-4 max-w-xs truncate text-zinc-400 italic">
                                                    "{lead.last_query}"
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={() => updateStatus(lead.id, 'verified')} className="p-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-lg transition-colors border border-transparent hover:border-green-500/30" title="Verify">
                                                            <CheckCircle size={16} />
                                                        </button>
                                                        <button onClick={() => updateStatus(lead.id, 'pending')} className="p-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 rounded-lg transition-colors border border-transparent hover:border-yellow-500/30" title="Pending">
                                                            <Clock size={16} />
                                                        </button>
                                                        <button onClick={() => updateStatus(lead.id, 'closed')} className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors border border-transparent hover:border-red-500/30" title="Close">
                                                            <XCircle size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {data.length === 0 && (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-24 text-center text-zinc-600">
                                                    No records found for this category.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            // Chat History View
                            <div className="space-y-6">
                                {groupHistoryByLead(data).map(([leadId, group]) => (
                                    <div key={leadId} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                                        <div className="bg-zinc-950 px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
                                            <div>
                                                <h3 className="text-white font-bold">{group.name}</h3>
                                                <p className="text-xs text-zinc-500">{group.email}</p>
                                            </div>
                                            <div className="text-xs text-zinc-600">ID: {leadId}</div>
                                        </div>
                                        <div className="p-6 space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                                            {group.messages.map((msg, idx) => (
                                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                    <div className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${msg.role === 'user'
                                                        ? 'bg-[#D3FD50]/10 text-[#D3FD50] border border-[#D3FD50]/20 rounded-tr-none'
                                                        : 'bg-zinc-800 text-zinc-300 rounded-tl-none'
                                                        }`}>
                                                        <div className="mb-1 text-[10px] opacity-50 uppercase tracking-wider">{msg.role} - {new Date(msg.created_at).toLocaleTimeString()}</div>
                                                        {msg.message}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {data.length === 0 && (
                                    <div className="text-center text-zinc-600 py-24">No conversation logs available.</div>
                                )}
                            </div>
                        )
                    )}
                </main>
            </div>
        </div>
    );
};

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

export default Admin;
