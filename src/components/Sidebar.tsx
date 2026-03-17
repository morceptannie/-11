import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  History, 
  BarChart3, 
  Users, 
  Building2, 
  UserCircle,
  LogOut,
  ClipboardCheck,
  PlusCircle,
  Zap,
  Briefcase,
  UserPlus
} from 'lucide-react';
import { useAuth, UserRole, ActiveSystem } from '../contexts/AuthContext';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
  system: ActiveSystem;
}

const navItems: NavItem[] = [
  // IDDI System Items
  { label: '系統概況', path: '/dashboard', icon: <LayoutDashboard size={20} />, roles: ['admin', 'staff', 'reviewer', 'vendor'], system: 'iddi' },
  { label: 'IDDI 補助管理', path: '/admin/cases', icon: <FileText size={20} />, roles: ['admin', 'staff'], system: 'iddi' },
  { label: '審查狀態', path: '/admin/review-status', icon: <ClipboardCheck size={20} />, roles: ['admin', 'staff'], system: 'iddi' },
  { label: '您的審查案件', path: '/reviewer/cases', icon: <ClipboardCheck size={20} />, roles: ['reviewer'], system: 'iddi' },
  { label: '我的申請案件', path: '/vendor/my-cases', icon: <FileText size={20} />, roles: ['vendor'], system: 'iddi' },
  { label: '新增申請案', path: '/vendor/new-case', icon: <PlusCircle size={20} />, roles: ['vendor'], system: 'iddi' },
  
  // Energy System Items
  { label: '能量登錄概況', path: '/energy/dashboard', icon: <LayoutDashboard size={20} />, roles: ['admin', 'staff', 'vendor'], system: 'energy' },
  { label: '能量登錄管理', path: '/energy/admin/cases', icon: <Zap size={20} />, roles: ['admin', 'staff'], system: 'energy' },
  { label: '新業者申請', path: '/energy/vendor/new-case', icon: <PlusCircle size={20} />, roles: ['vendor'], system: 'energy' },
  { label: '申請進度查詢', path: '/energy/vendor/my-cases', icon: <FileText size={20} />, roles: ['vendor'], system: 'energy' },
  { label: '設計人員管理', path: '/energy/vendor/personnel', icon: <UserPlus size={20} />, roles: ['vendor'], system: 'energy' },
  { label: '實績案例管理', path: '/energy/vendor/cases', icon: <Briefcase size={20} />, roles: ['vendor'], system: 'energy' },

  // Shared Admin Items
  { label: '廠商資料管理', path: '/admin/vendors', icon: <Building2 size={20} />, roles: ['admin'], system: 'iddi' },
  { label: '廠商資料管理', path: '/admin/vendors', icon: <Building2 size={20} />, roles: ['admin'], system: 'energy' },
  { label: '權限管理', path: '/admin/permissions', icon: <Users size={20} />, roles: ['admin'], system: 'iddi' },
  { label: '權限管理', path: '/admin/permissions', icon: <Users size={20} />, roles: ['admin'], system: 'energy' },
  { label: '歷史案件', path: '/admin/history', icon: <History size={20} />, roles: ['admin', 'staff'], system: 'iddi' },
  { label: '歷史案件', path: '/admin/history', icon: <History size={20} />, roles: ['admin', 'staff'], system: 'energy' },
  { label: '統計分析', path: '/admin/analysis', icon: <BarChart3 size={20} />, roles: ['admin', 'staff'], system: 'iddi' },
  { label: '統計分析', path: '/energy/admin/analysis', icon: <BarChart3 size={20} />, roles: ['admin', 'staff'], system: 'energy' },
  { label: '資料設定', path: '/admin/settings', icon: <Settings size={20} />, roles: ['admin'], system: 'iddi' },
  { label: '資料設定', path: '/admin/settings', icon: <Settings size={20} />, roles: ['admin'], system: 'energy' },
];

export default function Sidebar() {
  const { user, logout, activeSystem, setActiveSystem } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const filteredItems = navItems.filter(item => 
    item.roles.includes(user.role) && item.system === activeSystem
  );

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs">IDDI</div>
          IDDI 系統
        </h1>
      </div>

      <div className="px-4 py-4">
        <div className="bg-slate-800 rounded-xl p-1 flex">
          <button 
            onClick={() => setActiveSystem('iddi')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeSystem === 'iddi' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            IDDI 補助
          </button>
          <button 
            onClick={() => setActiveSystem('energy')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeSystem === 'energy' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            能量登錄
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <div className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {activeSystem === 'iddi' ? 'IDDI 計畫選單' : '能量登錄選單'}
        </div>
        {filteredItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-3 transition-colors ${
              location.pathname === item.path 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-3 mb-2">
          <UserCircle size={32} className="text-slate-400" />
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-500 truncate">{user.role.toUpperCase()}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          登出系統
        </button>
      </div>
    </aside>
  );
}
