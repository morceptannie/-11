import { 
  Users, 
  FileCheck, 
  Clock, 
  AlertCircle, 
  TrendingUp, 
  ArrowUpRight,
  Calendar
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { activeSystem } = useAuth();
  
  const iddiStats = [
    { label: '待審核案件', value: '12', icon: <Clock className="text-amber-600" />, trend: '+2', color: 'bg-amber-50' },
    { label: '已通過案件', value: '48', icon: <FileCheck className="text-emerald-600" />, trend: '+5', color: 'bg-emerald-50' },
    { label: '補件中案件', value: '5', icon: <AlertCircle className="text-rose-600" />, trend: '-1', color: 'bg-rose-50' },
    { label: '總申請廠商', value: '128', icon: <Users className="text-blue-600" />, trend: '+12', color: 'bg-blue-50' },
  ];

  const energyStats = [
    { label: '待初審案件', value: '8', icon: <Clock className="text-amber-600" />, trend: '+1', color: 'bg-amber-50' },
    { label: '已登錄業者', value: '342', icon: <FileCheck className="text-emerald-600" />, trend: '+8', color: 'bg-emerald-50' },
    { label: '證書即將到期', value: '14', icon: <AlertCircle className="text-rose-600" />, trend: '+3', color: 'bg-rose-50' },
    { label: '本月新申請', value: '22', icon: <Users className="text-blue-600" />, trend: '+4', color: 'bg-blue-50' },
  ];

  const stats = activeSystem === 'iddi' ? iddiStats : energyStats;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {activeSystem === 'iddi' ? 'IDDI 系統概況' : '能量登錄系統概況'}
          </h2>
          <p className="text-slate-500">歡迎回來，這是目前的申請與審查進度摘要。</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600">
          <Calendar size={16} />
          2024年3月17日
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                {stat.icon}
              </div>
              <span className={`flex items-center text-xs font-bold ${stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trend} <TrendingUp size={12} className="ml-1" />
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">近期申請案件</h3>
            <button className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1">
              查看全部 <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">序號</th>
                  <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">廠商名稱</th>
                  <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">類別</th>
                  <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">狀態</th>
                  <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">更新時間</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { id: '001', name: '創研設計股份有限公司', type: '第一類', status: '申請中', date: '2024/03/15' },
                  { id: '002', name: '宏達製造工業', type: '第二類', status: '待資格審核', date: '2024/03/14' },
                  { id: '003', name: '未來科技實驗室', type: '第一類', status: '補件中', date: '2024/03/12' },
                  { id: '004', name: '大漢家具設計', type: '第一類', status: '資格審通過', date: '2024/03/10' },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50 transition-colors">
                    <td className="py-4 text-sm font-mono text-slate-500">{row.id}</td>
                    <td className="py-4 text-sm font-bold text-slate-900">{row.name}</td>
                    <td className="py-4 text-sm text-slate-600">{row.type}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                        row.status === '申請中' ? 'bg-blue-50 text-blue-600' :
                        row.status === '待資格審核' ? 'bg-amber-50 text-amber-600' :
                        row.status === '補件中' ? 'bg-rose-50 text-rose-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-slate-500">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">系統通知</h3>
          <div className="space-y-6">
            {[
              { title: '資格審查提醒', desc: '尚有 3 件案件超過 3 日未審畢', time: '10分鐘前', type: 'alert' },
              { title: '系統維護公告', desc: '本週六凌晨 02:00 - 04:00 進行資料庫優化', time: '2小時前', type: 'info' },
              { title: '新申請案提交', desc: '「宏達製造工業」已提交 IDDI 補助申請', time: '5小時前', type: 'new' },
            ].map((note, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                  note.type === 'alert' ? 'bg-rose-500' :
                  note.type === 'info' ? 'bg-blue-500' : 'bg-emerald-500'
                }`}></div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{note.title}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{note.desc}</p>
                  <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-wider">{note.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
