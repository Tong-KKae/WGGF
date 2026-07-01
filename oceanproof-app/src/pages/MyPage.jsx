import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { BadgeCircle } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { activityHistory, myBadges, certificate, citizenUser, projects } from '../data/mockData';

const tabs = [
  { key: 'activity', label: '활동 이력' },
  { key: 'badges', label: '배지 · 인증서' },
  { key: 'projects', label: '참여 프로젝트' },
  { key: 'settings', label: '계정 설정', soon: true },
];

export function MyPage() {
  const [tab, setTab] = useState('activity');
  const navigate = useNavigate();

  return (
    <ScreenCard>
      <SiteHeader
        right={
          <button type="button" className="wf-btn" onClick={() => navigate('/')}>
            로그아웃
          </button>
        }
      />
      <div className="row split-mobile" style={{ minHeight: 600 }}>
        <Sidebar tabs={tabs} active={tab} onChange={setTab} />
        <div className="grow pad32 col gap24">
          <div className="row gap16 wrap">
            <div className="wf-img" style={{ width: 80, height: 80, borderRadius: '50%' }}>
              프로필
            </div>
            <div className="col gap8" style={{ justifyContent: 'center' }}>
              <div className="h2">{citizenUser.name} 님</div>
              <div className="txt">
                누적 활동 {citizenUser.activities}회 · {citizenUser.points}포인트 · 배지 {citizenUser.badges}개
              </div>
            </div>
          </div>
          <div className="divider2" />

          {tab === 'activity' && (
            <div className="col gap16">
              <div className="h3">최근 활동 이력</div>
              <div className="table-scroll">
                <table>
                  <tbody>
                    <tr>
                      <th>날짜</th>
                      <th>프로젝트</th>
                      <th>활동</th>
                      <th>검증 상태</th>
                    </tr>
                    {activityHistory.map((h) => (
                      <tr key={h.date + h.project}>
                        <td>{h.date}</td>
                        <td>{h.project}</td>
                        <td>{h.activity}</td>
                        <td>{h.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'badges' && (
            <div className="col gap16">
              <div className="h3">획득 배지</div>
              <div className="row gap16 wrap">
                {myBadges.map((b) => (
                  <BadgeCircle key={b.key} icon={b.icon} label={b.label} earned={b.earned} />
                ))}
              </div>
              <div className="divider2" />
              <div className="h3">발급된 인증서</div>
              <div className="cert-card">
                <div className="cert-inner col gap10">
                  <div className="row between">
                    <div className="label">CERTIFICATE NO.</div>
                    <div className="txt">{certificate.no}</div>
                  </div>
                  <div className="divider2" />
                  <div className="row between txt">
                    <div>프로젝트명</div>
                    <div>
                      <b>{certificate.project}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>활동 유형</div>
                    <div>
                      <b>{certificate.activity}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>활동 일시</div>
                    <div>
                      <b>{certificate.datetime}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>검증 상태</div>
                    <Pill accent>{certificate.status}</Pill>
                  </div>
                  <div className="row between txt">
                    <div>복원 면적 기여</div>
                    <div>
                      <b>{certificate.area}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>예상 탄소 기여량</div>
                    <div>
                      <b>{certificate.carbon}</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gap8">
                <button type="button" className="wf-btn accent" onClick={() => alert('데모: 인증서 PDF를 다운로드합니다.')}>
                  인증서 PDF 다운로드
                </button>
                <button type="button" className="wf-btn" onClick={() => alert('데모: SNS 공유 창을 엽니다.')}>
                  SNS 공유하기
                </button>
              </div>
            </div>
          )}

          {tab === 'projects' && (
            <div className="col gap16">
              <div className="h3">참여 프로젝트</div>
              <div className="row gap16 wrap">
                {projects.slice(0, 2).map((p) => (
                  <div
                    key={p.id}
                    className="wf-card clickable grow"
                    style={{ minWidth: 260 }}
                    onClick={() => navigate(`/projects/${p.id}`)}
                  >
                    <div className="wf-img" style={{ height: 120 }}>
                      프로젝트 대표 이미지
                    </div>
                    <div className="pad16 col gap8">
                      <div className="row between">
                        <div className="h3">{p.name}</div>
                        <Pill accent={p.statusVariant === 'accent'}>{p.status}</Pill>
                      </div>
                      <div className="txt">
                        참여자 {p.participants}명 · 진행률 {p.progress}%
                      </div>
                      <ProgressBar percent={p.progress} />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="wf-btn" onClick={() => navigate('/projects')}>
                전체 프로젝트 둘러보기
              </button>
            </div>
          )}
        </div>
      </div>
    </ScreenCard>
  );
}
