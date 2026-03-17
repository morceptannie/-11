import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';

const categoryData = [
  { name: '工業設計', value: 45 },
  { name: '視覺傳達', value: 32 },
  { name: '互動多媒體', value: 18 },
  { name: '空間設計', value: 25 },
  { name: '時尚設計', value: 12 },
  { name: '整合設計', value: 15 },
];

const regionData = [
  { name: '北部', value: 65 },
  { name: '中部', value: 25 },
  { name: '南部', value: 30 },
  { name: '東部', value: 5 },
  { name: '離島', value: 2 },
];

const COLORS = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2'];

export default function EnergyAnalysis() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">能量登錄：統計分析</h2>
          <p className="text-slate-500">檢視各類別登錄業者分布與趨勢分析。</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
            <Download size={18} /> 匯出數據
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Distribution */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">登錄類別分布</h3>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Calendar size={14} /> 2024 年度
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="value" fill="#2563eb" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-8">地區分布概況</h3>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Capital Range */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-8">資本額級距統計</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: '500萬以下', value: '42%', count: 54 },
              { label: '500-1000萬', value: '28%', count: 36 },
              { label: '1001-5000萬', value: '15%', count: 19 },
              { label: '5001萬-1億', value: '10%', count: 13 },
              { label: '1億以上', value: '5%', count: 6 },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">{item.label}</p>
                <p className="text-2xl font-black text-slate-900 mb-1">{item.value}</p>
                <p className="text-[10px] text-slate-500 font-medium">{item.count} 家業者</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
