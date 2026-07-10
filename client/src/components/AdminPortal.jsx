import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Lock, Search, Trash2, ArrowLeft, Mail, FileText, Database, ShieldAlert, Sparkles, Filter, TrendingUp, Layers, Briefcase } from 'lucide-react';

/**
 * AdminPortal Component
 * 
 * Secure control dashboard located at /admin.
 * Features:
 * - Passcode verification modal lock ('admin123').
 * - Statistics cards detailing total submissions and project category counts.
 * - Live Axios client data polling from GET /api/contact.
 * - Search text matching and tab filters.
 * - CRUD delete capabilities linked to DELETE /api/contact/:id.
 */
export default function AdminPortal() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const response = await axios.post('/api/admin/login', { passcode });
      if (response.data && response.data.success) {
        setIsAuthenticated(true);
        fetchInquiries();
      } else {
        setAuthError(response.data.message || 'Access Denied.');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setAuthError(err.response.data.message || 'Access Denied.');
      } else {
        setAuthError('Failed to verify credentials. The API server might be offline.');
      }
    }
  };

  const fetchInquiries = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await axios.get('/api/contact');
      if (response.data && response.data.success) {
        setInquiries(response.data.data);
      } else {
        setErrorMsg(response.data.message || 'Failed to fetch inquiries.');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg('Failed to connect to backend server. Please verify your connection.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry permanently?')) return;
    
    try {
      const response = await axios.delete(`/api/contact/${id}`);
      if (response.data && response.data.success) {
        // Refresh local list
        setInquiries(prev => prev.filter(item => item._id !== id));
      } else {
        alert(response.data.message || 'Failed to delete inquiry.');
      }
    } catch (err) {
      alert('Error occurred while deleting inquiry.');
    }
  };

  const handleReturnHome = () => {
    window.location.href = '/';
  };

  // Compute Statistics
  const totalCount = inquiries.length;
  const softwareCount = inquiries.filter(item => item.subject === 'Software Development').length;
  const marketingCount = inquiries.filter(item => item.subject === 'Digital Marketing').length;
  const civilCount = inquiries.filter(item => item.subject === 'Civil Engineering').length;
  const businessCount = inquiries.filter(item => item.subject === 'Business Consulting').length;

  // Filter inquiries based on Active Tab and Search Term
  const filteredInquiries = inquiries.filter(item => {
    const matchesTab = activeTab === 'All' || item.subject === activeTab;
    
    const text = `${item.name} ${item.email} ${item.message} ${item.subject}`.toLowerCase();
    const matchesSearch = text.includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const getSubjectBadgeStyles = (subject) => {
    switch (subject) {
      case 'Software Development':
        return 'bg-brand-purple-500/10 text-brand-purple-600 dark:text-brand-purple-400 border-brand-purple-500/20';
      case 'Digital Marketing':
        return 'bg-brand-rose-500/10 text-brand-rose-500 dark:text-brand-rose-400 border-brand-rose-500/20';
      case 'Civil Engineering':
        return 'bg-brand-teal-500/10 text-brand-teal-600 dark:text-brand-teal-400 border-brand-teal-500/20';
      case 'Business Consulting':
        return 'bg-brand-emerald-500/10 text-brand-emerald-600 dark:text-brand-emerald-400 border-brand-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center p-4 mesh-gradient select-none">
        
        {/* Ambient Blur Orbs */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-purple-500/10 dark:bg-brand-purple-500/20 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-brand-teal-500/10 dark:bg-brand-teal-500/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-zinc-800/40 relative z-10 shadow-lg text-center animate-float-medium">
          
          <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-purple-500 flex items-center justify-center text-white mb-6 shadow-glow-purple">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
            Admin Access Portal
          </h2>
          <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mb-8 max-w-xs mx-auto">
            Provide the credential security code to inspect and manage client inquiries.
          </p>

          {authError && (
            <div className="p-3.5 rounded-xl bg-brand-rose-500/10 border border-brand-rose-500/30 text-xs font-bold text-brand-rose-600 dark:text-brand-rose-400 mb-6 flex items-center justify-center space-x-2">
              <ShieldAlert className="w-4 h-4" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="sr-only">Admin Passcode</label>
              <input
                type="password"
                id="passcode"
                required
                placeholder="Enter admin passcode"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-center text-sm font-semibold tracking-widest text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 transition-all placeholder:tracking-normal placeholder:text-slate-400 dark:placeholder:text-zinc-600"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-purple-600 to-brand-indigo-600 hover:from-brand-purple-500 hover:to-brand-indigo-500 transition-all cursor-pointer shadow-md hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0"
            >
              Unlock Dashboard
            </button>
          </form>

          <button
            onClick={handleReturnHome}
            className="mt-6 text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-brand-purple-500 dark:hover:text-brand-purple-400 transition-colors flex items-center justify-center mx-auto space-x-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full transition-colors duration-300 mesh-gradient pb-20 pt-10">
      
      {/* Decorative Grid Grid background decorative layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/20 via-transparent to-transparent dark:from-zinc-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header navigation bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pb-6 border-b border-slate-200/50 dark:border-zinc-800/40 gap-4">
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleReturnHome}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 hover:bg-slate-100 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-none">
                  Inquiry Dashboard
                </h1>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-purple-500 text-white uppercase tracking-wider">
                  Admin
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mt-1.5 leading-none">
                Manage incoming project requests submitted to ARFico.
              </p>
            </div>
          </div>

          <button
            onClick={fetchInquiries}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 hover:bg-slate-100 dark:hover:bg-zinc-900 text-xs font-bold text-slate-700 dark:text-zinc-200 shadow-sm cursor-pointer transition-colors"
          >
            Poll Database
          </button>
        </div>

        {/* Status Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          
          {/* Card Total */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-slate-300 dark:hover:border-zinc-800 transition-all flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Total inquiries</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{totalCount}</span>
            </div>
          </div>

          {/* Software */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-purple-500/30 transition-all flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-brand-purple-500 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Software</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{softwareCount}</span>
            </div>
          </div>

          {/* Marketing */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-rose-500/30 transition-all flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-brand-rose-500 text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Marketing</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{marketingCount}</span>
            </div>
          </div>

          {/* Civil */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-teal-500/30 transition-all flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-brand-teal-600 text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Civil Eng.</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{civilCount}</span>
            </div>
          </div>

          {/* Business */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-emerald-500/30 transition-all flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-brand-emerald-500 text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Consulting</span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{businessCount}</span>
            </div>
          </div>

        </div>

        {/* Dashboard Actions: Search & Navigation tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 relative">
          
          {/* Tab switches */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {['All', 'Software Development', 'Digital Marketing', 'Civil Engineering', 'Business Consulting'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all border ${
                  activeTab === tab 
                    ? 'bg-slate-950 border-slate-950 text-white dark:bg-white dark:border-white dark:text-slate-950 shadow-sm'
                    : 'bg-white/50 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800/60 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900'
                }`}
              >
                {tab === 'All' ? 'All' : tab.split(' ')[0] + ' ' + (tab.split(' ')[1] || '')}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-600" />
            <input
              type="text"
              placeholder="Search by name, email, query text..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-xs font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

        </div>

        {/* Loader, Error, or Feed */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg className="animate-spin h-8 w-8 text-brand-purple-500 mb-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400">Querying database cluster...</span>
          </div>
        ) : errorMsg ? (
          <div className="p-6 rounded-2xl glass-card border border-brand-rose-500/20 shadow-md text-center py-16">
            <ShieldAlert className="w-12 h-12 text-brand-rose-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">API Connection Interrupted</h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 max-w-sm mx-auto mb-6">{errorMsg}</p>
            <button
              onClick={fetchInquiries}
              className="px-5 py-2.5 rounded-xl bg-brand-rose-500 text-white hover:bg-brand-rose-600 text-xs font-bold cursor-pointer transition-colors shadow-md"
            >
              Retry Connection
            </button>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-zinc-800/40 text-center py-20">
            <FileText className="w-12 h-12 text-slate-300 dark:text-zinc-700 mx-auto mb-4" />
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">No Inquiries Found</h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
              {inquiries.length === 0 ? 'No inquiry records logged in Atlas.' : 'No records match your filters.'}
            </p>
          </div>
        ) : (
          /* Cards inquiries list */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInquiries.map((inquiry) => {
              const dateObj = new Date(inquiry.createdAt);
              const formattedDate = dateObj.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              const formattedTime = dateObj.toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div 
                  key={inquiry._id}
                  className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-zinc-800/40 flex flex-col justify-between hover:border-slate-300 dark:hover:border-zinc-800 transition-all hover:shadow-md relative overflow-hidden"
                >
                  
                  {/* Card Header Profile */}
                  <div>
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                          {inquiry.name}
                        </h3>
                        <a 
                          href={`mailto:${inquiry.email}`}
                          className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-brand-purple-500 transition-colors mt-1"
                        >
                          <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                          <span className="break-all">{inquiry.email}</span>
                        </a>
                      </div>

                      {/* Area Tag badge */}
                      <span className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold border uppercase tracking-wider ${getSubjectBadgeStyles(inquiry.subject)}`}>
                        {inquiry.subject}
                      </span>
                    </div>

                    {/* Inquiry description details */}
                    <div className="p-4 rounded-xl bg-slate-500/5 dark:bg-zinc-950/20 border border-slate-200/30 dark:border-zinc-800/20 text-xs font-semibold text-slate-700 dark:text-zinc-300 leading-relaxed min-h-[90px] whitespace-pre-wrap">
                      {inquiry.message}
                    </div>
                  </div>

                  {/* Card Footer action items */}
                  <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-zinc-800/20 pt-4 mt-6">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase">
                      {formattedDate} // {formattedTime}
                    </span>
                    
                    <button
                      onClick={() => handleDelete(inquiry._id)}
                      className="p-2 rounded-lg text-slate-400 hover:text-brand-rose-500 hover:bg-brand-rose-500/10 cursor-pointer transition-all"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
