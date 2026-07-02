import { useT } from '../../i18n';

export function SiteFooter() {
  const t = useT();
  return (
    <>
      <div className="divider" />
      <div className="site-footer row between wrap gap12">
        <div>© 2026 OceanProof · GREENERS</div>
        <div className="row gap16">
          <div>{t('이용약관')}</div>
          <div>{t('개인정보처리방침')}</div>
          <div>{t('문의하기')}</div>
        </div>
      </div>
    </>
  );
}
