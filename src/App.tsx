import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './LoginPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CaseList from './pages/CaseList';
import NewCase from './pages/NewCase';
import ReviewProcess from './pages/ReviewProcess';
import EnergyNewCase from './pages/EnergyNewCase';
import EnergyAnalysis from './pages/EnergyAnalysis';

function AppContent() {
  const { user, activeSystem } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="p-8 flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* IDDI System Routes */}
            <Route path="/admin/cases" element={<CaseList />} />
            <Route path="/admin/review-status" element={<CaseList />} />
            
            {/* Energy System Routes */}
            <Route path="/energy/dashboard" element={<Dashboard />} />
            <Route path="/energy/admin/cases" element={<CaseList />} />
            <Route path="/energy/vendor/new-case" element={<EnergyNewCase />} />
            <Route path="/energy/vendor/my-cases" element={<CaseList />} />
            <Route path="/energy/vendor/personnel" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">設計人員管理模組 (開發中)</div>} />
            <Route path="/energy/vendor/cases" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">實績案例管理模組 (開發中)</div>} />
            <Route path="/energy/admin/analysis" element={<EnergyAnalysis />} />

            {/* Reviewer Routes */}
            <Route path="/reviewer/cases" element={<CaseList />} />
            <Route path="/reviewer/review/:id" element={<ReviewProcess />} />

            {/* Vendor Routes */}
            <Route path="/vendor/my-cases" element={<CaseList />} />
            <Route path="/vendor/new-case" element={<NewCase />} />

            {/* Shared Admin Routes */}
            <Route path="/admin/vendors" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">廠商資料管理模組 (開發中)</div>} />
            <Route path="/admin/permissions" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">權限管理模組 (開發中)</div>} />
            <Route path="/admin/history" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">歷史案件模組 (開發中)</div>} />
            <Route path="/admin/analysis" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">統計分析模組 (開發中)</div>} />
            <Route path="/admin/settings" element={<div className="p-8 bg-white rounded-2xl border border-slate-200">資料設定模組 (開發中)</div>} />

            <Route path="*" element={<Navigate to={activeSystem === 'iddi' ? '/dashboard' : '/energy/dashboard'} replace />} />
          </Routes>
        </main>
        <footer className="p-6 text-center text-slate-400 text-xs border-t border-slate-200 bg-white">
          IDDI 設計驅動產業創新系統 © 2024 Taiwan Design Research Institute.
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
