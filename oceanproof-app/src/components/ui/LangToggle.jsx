import { useApp } from '../../context/AppContext';

export function LangToggle() {
  const { lang, setLang } = useApp();
  return (
    <div className="lang-toggle row">
      <button type="button" className={`lang-opt ${lang === 'KR' ? 'active' : ''}`} onClick={() => setLang('KR')}>
        KR
      </button>
      <button type="button" className={`lang-opt ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>
        EN
      </button>
    </div>
  );
}
