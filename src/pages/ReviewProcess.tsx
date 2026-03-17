import { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  Save, 
  Send,
  ArrowLeft,
  User
} from 'lucide-react';

export default function ReviewProcess() {
  const [scores, setScores] = useState({
    criteria1: 0,
    criteria2: 0,
    criteria3: 0,
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">案件審查：智慧製造數位轉型案</h2>
            <p className="text-sm text-slate-500">廠商：宏達製造工業 | 序號：002</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full border border-amber-100">
            待審核
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Vendor Info & Files */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" /> 申請資料檢視
            </h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">公司基本資料</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-800">宏達製造工業</p>
                  <p className="text-xs text-slate-500">資本額：10,000,000 TWD</p>
                  <p className="text-xs text-slate-500">地區：台中市西屯區</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">聯絡資訊</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-slate-800">王小明 (經理)</p>
                  <p className="text-xs text-slate-500">Email: ming@honda-mfg.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">上傳檔案</p>
              {[
                '提案計畫書_宏達製造.pdf',
                '公司登記證明_宏達製造.jpg',
                '112年度資產負債表.pdf',
                '視訊簡報連結 (Google Meet)'
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-slate-400 group-hover:text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">{file}</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">歷史審查紀錄</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-slate-900">計畫承辦人 (陳大文)</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">2024/03/16 14:30</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                    資格審查通過。廠商資料齊全，符合第二類申請資格。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Scoring Form */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-6">委員評分表</h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">1. 計畫創新性 (30%)</label>
                <input 
                  type="range" min="0" max="100" step="1" 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  onChange={(e) => setScores({...scores, criteria1: parseInt(e.target.value)})}
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>0分</span>
                  <span className="text-blue-600 text-sm">{scores.criteria1}分</span>
                  <span>100分</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">2. 執行可行性 (40%)</label>
                <input 
                  type="range" min="0" max="100" step="1" 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  onChange={(e) => setScores({...scores, criteria2: parseInt(e.target.value)})}
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>0分</span>
                  <span className="text-blue-600 text-sm">{scores.criteria2}分</span>
                  <span>100分</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">3. 預期效益 (30%)</label>
                <input 
                  type="range" min="0" max="100" step="1" 
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  onChange={(e) => setScores({...scores, criteria3: parseInt(e.target.value)})}
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>0分</span>
                  <span className="text-blue-600 text-sm">{scores.criteria3}分</span>
                  <span>100分</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">推薦理由 / 改進建議</label>
                <textarea rows={4} className="w-full p-3 bg-slate-50 border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500" placeholder="請輸入您的評語..."></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                  <Save size={18} /> 暫存
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                  <Send size={18} /> 送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
