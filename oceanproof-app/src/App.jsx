import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { DemoNav } from './components/layout/DemoNav';
import { ChatWidget } from './components/chat/ChatWidget';

import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { JoinPage } from './pages/JoinPage';
import { JoinCompletePage } from './pages/JoinCompletePage';
import { ProjectListPage } from './pages/ProjectListPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { MyPage } from './pages/MyPage';
import { SponsorshipPricingPage } from './pages/sponsorship/SponsorshipPricingPage';
import { SponsorshipProjectPage } from './pages/sponsorship/SponsorshipProjectPage';
import { SponsorshipApplyPage } from './pages/sponsorship/SponsorshipApplyPage';
import { SponsorshipPaymentPage } from './pages/sponsorship/SponsorshipPaymentPage';
import { SponsorshipCompletePage } from './pages/sponsorship/SponsorshipCompletePage';
import { EsgReportPage } from './pages/sponsorship/EsgReportPage';
import { InquiryPage } from './pages/InquiryPage';
import { InquiryCompletePage } from './pages/InquiryCompletePage';
import { BusinessDashboardPage } from './pages/BusinessDashboardPage';
import { GovDashboardPage } from './pages/GovDashboardPage';
import { AdminPage } from './pages/AdminPage';
import { AdminVerifyDetailPage } from './pages/AdminVerifyDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <DemoNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/join" element={<JoinPage />} />
        <Route path="/join/complete" element={<JoinCompletePage />} />

        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />

        <Route path="/mypage" element={<MyPage />} />

        <Route path="/sponsorship" element={<SponsorshipPricingPage />} />
        <Route path="/sponsorship/projects" element={<SponsorshipProjectPage />} />
        <Route path="/sponsorship/apply" element={<SponsorshipApplyPage />} />
        <Route path="/sponsorship/payment" element={<SponsorshipPaymentPage />} />
        <Route path="/sponsorship/complete" element={<SponsorshipCompletePage />} />
        <Route path="/sponsorship/report" element={<EsgReportPage />} />

        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/inquiry/complete" element={<InquiryCompletePage />} />

        <Route path="/business" element={<BusinessDashboardPage />} />
        <Route path="/gov" element={<GovDashboardPage />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/verify/:id" element={<AdminVerifyDetailPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ChatWidget />
    </AppProvider>
  );
}

export default App;
