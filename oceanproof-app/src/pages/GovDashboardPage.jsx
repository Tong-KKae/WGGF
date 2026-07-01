import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { govUser } from '../data/mockData';

const tabs = [
  { key: 'map', label: '지역 성과 지도' },
  { key: 'kpi', label: '정책 KPI 추적', soon: true },
  { key: 'citizens', label: '참여 시민 현황', soon: true },
  { key: 'settings', label: '계정 설정', soon: true },
];

export function GovDashboardPage() {
  const navigate = useNavigate();

  return (
    <ScreenCard>
      <SiteHeader
        suffix=" · GOV"
        right={
          <>
            <Pill>{govUser.org}</Pill>
            <button type="button" className="wf-btn" onClick={() => navigate('/')}>
              로그아웃
            </button>
          </>
        }
      />
      <div className="row split-mobile" style={{ minHeight: 640 }}>
        <Sidebar tabs={tabs} active="map" onChange={() => {}} />
        <div className="grow pad32 col gap24">
          <div className="h2">지역별 해양 복원 성과</div>
          <div className="wf-map" style={{ height: 260 }}>
            지역별 복원 성과 지도 시각화 (Leaflet.js)
          </div>
          <StatRow stats={govUser.stats} />
          <div className="h3">정책 성과 KPI 추적</div>
          <div className="table-scroll">
            <table>
              <tbody>
                <tr>
                  <th>지표</th>
                  <th>목표</th>
                  <th>현재 달성</th>
                  <th>달성률</th>
                </tr>
                {govUser.kpiTable.map((row) => (
                  <tr key={row.metric}>
                    <td>{row.metric}</td>
                    <td>{row.goal}</td>
                    <td>{row.current}</td>
                    <td>{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ScreenCard>
  );
}
