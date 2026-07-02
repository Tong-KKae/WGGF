import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { EsgReportContent } from '../../components/esg/EsgReportContent';

export function EsgReportPage() {
  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" />
      <div className="pad32">
        <EsgReportContent />
      </div>
    </ScreenCard>
  );
}
