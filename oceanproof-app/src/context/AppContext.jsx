import { createContext, useContext, useMemo, useState } from 'react';
import { sponsorshipPlans, projects } from '../data/mockData';

const AppContext = createContext(null);

const defaultSponsorship = {
  plan: sponsorshipPlans.find((p) => p.recommended) ?? sponsorshipPlans[0],
  project: projects[0],
  applicant: null,
  payment: '카드 결제',
};

export function AppProvider({ children }) {
  const [mode, setMode] = useState('citizen'); // 'citizen' | 'admin'
  const [lang, setLang] = useState('KR'); // 'KR' | 'EN'
  const [sponsorship, setSponsorship] = useState(defaultSponsorship);
  const [inquiry, setInquiry] = useState(null);

  const toggleMode = () => setMode((m) => (m === 'citizen' ? 'admin' : 'citizen'));

  const updateSponsorship = (patch) => setSponsorship((s) => ({ ...s, ...patch }));

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode,
      lang,
      setLang,
      sponsorship,
      updateSponsorship,
      setSponsorship,
      inquiry,
      setInquiry,
    }),
    [mode, lang, sponsorship, inquiry]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
