import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { MrvSteps } from '../components/ui/StepCircle';
import { ProjectRegisterForm } from '../components/admin/ProjectRegisterForm';
import { adminActivities, mrvSteps } from '../data/mockData';

const tabs = [
  { key: 'activity', label: '활동/검증 관리' },
  { key: 'project', label: '프로젝트 관리' },
  { key: 'users', label: '사용자 관리', soon: true },
  { key: 'sponsor', label: '기업 스폰서십 관리', soon: true },
  { key: 'notice', label: '공지사항 관리', soon: true },
  { key: 'status', label: '서비스 상태' },
];

export function AdminPage() {
  const [tab, setTab] = useState('activity');
  const navigate = useNavigate();

  return (
    <ScreenCard>
      <SiteHeader
        suffix=" · ADMIN"
        right={
          <button type="button" className="wf-btn" onClick={() => navigate('/')}>
            관리자 로그아웃
          </button>
        }
      />
      <div className="row split-mobile" style={{ minHeight: 640 }}>
        <Sidebar tabs={tabs} active={tab} onChange={setTab} />
        <div className="grow pad32 col gap24">
          {tab === 'activity' && (
            <>
              <div>
                <div className="h2" style={{ marginBottom: 12 }}>
                  활동/검증 관리
                </div>
                <div className="table-scroll">
                  <table>
                    <tbody>
                      <tr>
                        <th>활동 ID</th>
                        <th>시민</th>
                        <th>프로젝트</th>
                        <th>활동 유형</th>
                        <th>검증 단계</th>
                        <th style={{ width: 80 }}>관리</th>
                      </tr>
                      {adminActivities.map((a) => (
                        <tr key={a.id}>
                          <td>{a.id}</td>
                          <td>{a.citizen}</td>
                          <td>{a.project}</td>
                          <td>{a.type}</td>
                          <td>{a.stage}</td>
                          <td
                            style={{ cursor: 'pointer', color: 'var(--primary-dark)', fontWeight: 700 }}
                            onClick={() => navigate(`/admin/verify/${a.id}`)}
                          >
                            조회
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>...</td>
                        <td className="small">목록 더보기</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="divider2" />
              <div>
                <div className="h3" style={{ marginBottom: 8 }}>
                  기업 스폰서십 관리
                </div>
                <div className="wf-fill pad16 row between center wrap gap8">
                  <div className="txt">진행중 스폰서십: 6건 · 이번 분기 집행 예산: 4,200만원</div>
                  <button type="button" className="wf-btn" onClick={() => navigate('/sponsorship')}>
                    스폰서십 목록 보기
                  </button>
                </div>
              </div>
              <div>
                <div className="h3" style={{ marginBottom: 8 }}>
                  전체 현황 모니터링
                </div>
                <div className="row gap16 wrap">
                  <div className="wf-img grow" style={{ height: 120 }}>
                    월별 활동 제출 건수 추이
                  </div>
                  <div className="wf-img grow" style={{ height: 120 }}>
                    검증 단계별 처리 현황
                  </div>
                </div>
              </div>
              <div className="row gap16 wrap">
                <div className="wf-card pad16 grow row between center">
                  <div className="txt">위성 API 연동 상태</div>
                  <Pill>정상</Pill>
                </div>
                <div className="wf-card pad16 grow row between center">
                  <div className="txt">GIS 연동 상태</div>
                  <Pill>정상</Pill>
                </div>
              </div>
            </>
          )}

          {tab === 'project' && <ProjectRegisterForm />}

          {tab === 'status' && (
            <div className="col gap24">
              <div className="label">SC-13 · 5단계 순차 검증 필터</div>
              <div className="h2">활동 기록 #A-2026-0628-114 검증 현황</div>
              <MrvSteps steps={mrvSteps} />
              <div className="small">※ 시민 데이터는 최종 출력이 아닌 초기 입력값으로 처리됩니다.</div>
            </div>
          )}
        </div>
      </div>
    </ScreenCard>
  );
}
