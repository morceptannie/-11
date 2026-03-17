import { useState } from 'react';
import { Search, Filter, Download, ChevronRight, Eye } from 'lucide-react';

export default function CaseList() {
  const [filter, setFilter] = useState('all');

  const cases = [
    { id: '001', type: '第一類', company: '創研設計股份有限公司', project: '2024 永續設計創新計畫', status: '申請中', region: '北部', date: '2024/03/15' },
    { id: '002', type: '第二類', company: '宏達製造工業', project: '智慧製造數位轉型案', status: '待資格審核', region: '中部', date: '2024/03/14' },
    { id: '003', type: '第一類', company: '未來科技實驗室', project: 'AI 驅動產品開發計畫', status: '補件中', region: '南部', date: '2024/03/12' },
    { id: '004', type: '第一類', company: '大漢家具設計', project: '傳統工藝數位化應用', status: '資格審通過', region: '北部', date: '2024/03/10' },
    { id: '005', type: '第二類', company: '綠能動力科技', project: '低碳運輸解決方案', status: '書審通過', region: '南部', date: '2024/03/08' },
    { id: '006', type: '第一類', company: '優雅生活美學', project: '高齡友善居家環境設計', status: '已獲補助', region: '北部', date: '2024/03/05' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">申請案件管理</h2>
          <p className="text-slate-500">檢視、篩選並管理所有 IDDI 補助申請案件。</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            <Download size={18} />
            匯出報表
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="搜尋廠商名稱、案件名稱..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-400" />
            <select className="bg-slate-50 border-slate-200 rounded-lg text-sm px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>所有類別</option>
              <option>第一類</option>
              <option>第二類</option>
            </select>
            <select className="bg-slate-50 border-slate-200 rounded-lg text-sm px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>所有地區</option>
              <option>北部</option>
              <option>中部</option>
              <option>南部</option>
              <option>東部</option>
            </select>
            <select className="bg-slate-50 border-slate-200 rounded-lg text-sm px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>所有狀態</option>
              <option>申請中</option>
              <option>待審核</option>
              <option>補件中</option>
              <option>已獲補助</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">序號</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">類別</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">廠商名稱</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">案件名稱</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider text-center">狀態</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {cases.map((row, i) => (
                <tr key={i} className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 text-sm font-mono text-slate-500">{row.id}</td>
                  <td className="py-4 text-sm text-slate-600">{row.type}</td>
                  <td className="py-4">
                    <div className="text-sm font-bold text-slate-900">{row.company}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{row.region}</div>
                  </td>
                  <td className="py-4 text-sm text-slate-600">{row.project}</td>
                  <td className="py-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                      row.status === '申請中' ? 'bg-blue-50 text-blue-600' :
                      row.status === '待資格審核' ? 'bg-amber-50 text-amber-600' :
                      row.status === '補件中' ? 'bg-rose-50 text-rose-600' :
                      row.status === '已獲補助' ? 'bg-emerald-50 text-emerald-600' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                      <ChevronRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500 font-medium">顯示 1 到 6 筆，共 48 筆案件</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded text-xs font-bold text-slate-400 cursor-not-allowed">上一頁</button>
            <button className="px-3 py-1 bg-blue-600 border border-blue-600 rounded text-xs font-bold text-white">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50">下一頁</button>
          </div>
        </div>
      </div>
    </div>
  );
}
