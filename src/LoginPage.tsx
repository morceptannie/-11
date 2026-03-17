import { useAuth, UserRole } from './contexts/AuthContext';
import { Building2, ShieldCheck, UserCheck, UserCircle } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();

  const roles: { id: UserRole; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'admin', label: '管理員端', icon: <ShieldCheck size={32} />, desc: '系統管理、權限控管、統計分析' },
    { id: 'staff', label: '專辦人員端', icon: <UserCheck size={32} />, desc: '資格審查、案件管理、補件處理' },
    { id: 'reviewer', label: '審查委員端', icon: <ClipboardCheckIcon />, desc: '線上評分、評分表填寫、統計一覽' },
    { id: 'vendor', label: '廠商端', icon: <Building2 size={32} />, desc: '補助申請、進度查詢、資料管理' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl text-white text-3xl font-bold mb-6 shadow-xl shadow-blue-200">
            IDDI
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            IDDI 設計驅動產業創新系統
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            整合補助計畫申請、審查與管理的一站式平台，提升行政效率與資料品質。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => login(role.id)}
              className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all text-left flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-6">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {role.label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {role.desc}
              </p>
              <div className="mt-8 flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                登入系統 →
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm">
          © 2024 Taiwan Design Research Institute. All rights reserved.
        </div>
      </div>
    </div>
  );
}

function ClipboardCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
  );
}
