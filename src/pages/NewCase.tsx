import { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  Calculator,
  Info
} from 'lucide-react';

const steps = [
  { id: 1, title: '前測評估', icon: <Info size={20} /> },
  { id: 2, title: '申請書填寫', icon: <FileText size={20} /> },
  { id: 3, title: '經費分配', icon: <Calculator size={20} /> },
  { id: 4, title: '檔案上傳', icon: <Upload size={20} /> },
];

export default function NewCase() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">新增 IDDI 補助申請案</h2>
          <p className="text-slate-500">請依照步驟完成申請資料填寫與檔案上傳。</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative flex justify-between">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentStep > step.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' :
                currentStep === step.id ? 'bg-white border-2 border-blue-600 text-blue-600 shadow-lg shadow-blue-50' :
                'bg-white border-2 border-slate-200 text-slate-400'
              }`}>
                {currentStep > step.id ? <CheckCircle2 size={20} /> : step.icon}
              </div>
              <span className={`mt-3 text-xs font-bold uppercase tracking-wider ${
                currentStep === step.id ? 'text-blue-600' : 'text-slate-400'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col">
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
              <Info className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-blue-900 mb-1">申請前測說明</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  在開始正式申請前，我們需要您先完成一份簡單的設計力評測，這將幫助我們了解您的企業現況，並提供更精確的補助建議。
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '企業基本資料確認',
                '設計力自我評估問卷',
                '過往設計專案摘要',
                '未來三年發展願景'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs">
                    0{i+1}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">申請類別</label>
                <select className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">
                  <option>第一類：設計驅動創新</option>
                  <option>第二類：數位轉型應用</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">案件名稱</label>
                <input type="text" placeholder="請輸入計畫名稱" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">計畫摘要</label>
                <textarea rows={4} placeholder="請簡述計畫內容與預期效益" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">費用項目</th>
                    <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">預算金額 (TWD)</th>
                    <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">補助申請金額 (TWD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {['人事費', '設計委外費', '材料費', '行銷推廣費'].map((item, i) => (
                    <tr key={i}>
                      <td className="py-4 text-sm font-bold text-slate-900">{item}</td>
                      <td className="py-4"><input type="number" className="w-32 px-3 py-2 bg-slate-50 border-slate-200 rounded-lg text-sm" placeholder="0" /></td>
                      <td className="py-4"><input type="number" className="w-32 px-3 py-2 bg-slate-50 border-slate-200 rounded-lg text-sm" placeholder="0" /></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50">
                    <td className="py-4 px-4 text-sm font-black text-slate-900">總計</td>
                    <td className="py-4 text-sm font-black text-slate-900">0</td>
                    <td className="py-4 text-sm font-black text-blue-600">0</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '提案計畫書', desc: 'PDF 格式，不超過 10MB', required: true },
                { title: '公司登記證明', desc: '掃描檔，JPG/PNG/PDF', required: true },
                { title: '最近一年度財報', desc: '資產負債表與損益表', required: true },
                { title: '其他佐證資料', desc: '如專利、獲獎紀錄等', required: false },
              ].map((file, i) => (
                <div key={i} className="p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <Upload size={20} className="text-slate-500 group-hover:text-blue-600" />
                    </div>
                    {file.required && <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">必填</span>}
                  </div>
                  <h5 className="font-bold text-slate-900 mb-1">{file.title}</h5>
                  <p className="text-xs text-slate-500">{file.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-10 flex items-center justify-between border-t border-slate-100">
          <button 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft size={18} /> 上一步
          </button>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
              暫存草稿
            </button>
            {currentStep < steps.length ? (
              <button 
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
              >
                下一步 <ArrowRight size={18} />
              </button>
            ) : (
              <button className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-100 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all">
                確認送審 <CheckCircle2 size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
