import { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  Building2,
  Users,
  Briefcase,
  Info,
  DollarSign
} from 'lucide-react';

const steps = [
  { id: 1, title: '登錄類別', icon: <Info size={20} /> },
  { id: 2, title: '基本資料', icon: <Building2 size={20} /> },
  { id: 3, title: '營業資料', icon: <DollarSign size={20} /> },
  { id: 4, title: '組織結構', icon: <Users size={20} /> },
  { id: 5, title: '實績案例', icon: <Briefcase size={20} /> },
  { id: 6, title: '檔案上傳', icon: <Upload size={20} /> },
];

const categories = [
  { id: 'DE1', name: '工業設計', items: ['產品設計', '介面設計', '機構設計', '工業包裝', '工藝設計', '交通工具設計'] },
  { id: 'DE2', name: '視覺傳達設計', items: ['廣告設計', '品牌識別', '商業包裝', '美術編輯', '網頁設計', '插畫設計'] },
  { id: 'DE3', name: '互動多媒體', items: ['網站設計', '動畫設計', '影視特效', '電玩遊戲設計'] },
  { id: 'DE4', name: '空間設計', items: ['室內設計', '建築設計', '景觀設計', '園藝設計', '照明設計', '舞台設計'] },
];

export default function EnergyNewCase() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">能量登錄：新業者申請</h2>
        <p className="text-slate-500">請依照步驟完成設計服務機構能量登錄申請。</p>
      </div>

      {/* Stepper */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
        <div className="flex justify-between min-w-[600px] px-4">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentStep > step.id ? 'bg-blue-600 text-white' :
                currentStep === step.id ? 'bg-white border-2 border-blue-600 text-blue-600' :
                'bg-white border-2 border-slate-200 text-slate-400'
              }`}>
                {currentStep > step.id ? <CheckCircle2 size={20} /> : step.icon}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                currentStep === step.id ? 'text-blue-600' : 'text-slate-400'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm min-h-[500px] flex flex-col">
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold text-slate-900">選擇登錄類別</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="p-6 border border-slate-100 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">{cat.id}</span> {cat.name}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <label key={item} className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span className="text-xs text-slate-600">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold text-slate-900">基本資料</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">中文名稱</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm" defaultValue="創研設計股份有限公司" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">統一編號</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm" defaultValue="12345678" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">實收資本額 (仟元)</label>
                <input type="number" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm" defaultValue="10000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">負責人</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm" defaultValue="王大明" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">公司沿革 (200字以內)</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl text-sm"></textarea>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-bold text-slate-900">近三年營業資料</h3>
            <div className="space-y-8">
              {[114, 113, 112].map((year) => (
                <div key={year} className="p-6 border border-slate-100 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-4">{year} 年度</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">主要營業項目</label>
                      <input type="text" className="w-full px-3 py-2 bg-white border-slate-200 rounded-lg text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">營業額 (仟元)</label>
                      <input type="number" className="w-full px-3 py-2 bg-white border-slate-200 rounded-lg text-sm" />
                    </div>
                  </div>
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
