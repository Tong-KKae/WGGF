import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { LangToggle } from '../../components/ui/LangToggle';
import { EsgReportContent } from '../../components/esg/EsgReportContent';

export function EsgReportPage() {
  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" right={<LangToggle />} />
      <div className="pad32">
        <EsgReportContent />
      </div>
    </ScreenCard>
  );
}
