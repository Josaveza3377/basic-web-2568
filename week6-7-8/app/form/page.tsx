'use client';

import { useState } from 'react';

function FormPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !password) {
            setMessage('กรุณากรอกอีเมลและรหัสผ่าน');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            
            console.log('Register:', { email, password });
            setMessage('ลงทะเบียนสำเร็จ!');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessage('เกิดข้อผิดพลาด กรุณาลองใหม่');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
        
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 w-screen h-screen flex items-center justify-center p-4 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
            
            <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 relative z-10">

              
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">ลงทะเบียน</h1>
                    <p className="text-slate-500 text-sm font-medium">เข้าสู่ระบบด้วยข้อมูลของคุณ</p>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-xl text-center text-sm font-semibold backdrop-blur-sm transition-all duration-300 ${
                        message.includes('สำเร็จ') 
                            ? 'bg-green-100/80 text-green-700 border border-green-300' 
                            : 'bg-red-100/80 text-red-700 border border-red-300'
                    }`}>
                        {message}
                    </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                   
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 block">อีเมล</label>
                        <div className="relative">
                            <div className="absolute left-3 top-3.5 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input 
                                type="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com" 
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-slate-700" 
                            />
                        </div>
                    </div>

                    
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1 block">รหัสผ่าน</label>
                        <div className="relative">
                            <div className="absolute left-3 top-3.5 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input 
                                type="password" 
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 text-slate-700"
                            />
                        </div>
                    </div>

                  
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                กำลังลงทะเบียน...
                            </span>
                        ) : '✨ ลงทะเบียนเข้าสู่ระบบ'}
                    </button>
                </form>

                
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-3 bg-white text-slate-400 font-medium">หรือเข้าสู่ระบบด้วย</span>
                    </div>
                </div>

                
                <div className="space-y-3">
                    <button 
                        type="button"
                        onClick={() => handleSocialLogin('Email')}
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-xl border border-slate-300 transition-all duration-300 hover:shadow-md hover:border-slate-400 group"
                    >
                        <svg aria-label="Email icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Email
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleSocialLogin('Facebook')}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#1A77F2] to-[#0a6edb] hover:from-[#166FE5] hover:to-[#0a5fcc] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                        <svg aria-label="Facebook logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="group-hover:scale-110 transition-transform"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Facebook
                    </button>
                    <button 
                        type="button"
                        onClick={() => handleSocialLogin('Apple')}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-black to-slate-800 hover:from-slate-900 hover:to-black text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                        <svg aria-label="Apple logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195" className="group-hover:scale-110 transition-transform"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
                        Apple
                    </button>
                </div>

                
                <p className="text-center text-slate-500 text-xs mt-6">
                    มีบัญชีแล้ว? <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">เข้าสู่ระบบ</a>
                </p>
            </div>
        </div>
    );
}

export default FormPage;