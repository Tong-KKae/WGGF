import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { BadgeCircle } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { activityHistory, myBadges, certificate, citizenUser, projects } from '../data/mockData';
import { useT } from '../i18n';

const tabs = [
  { key: 'activity', label: '활동 이력' },
  { key: 'badges', label: '배지 · 인증서' },
  { key: 'projects', label: '참여 프로젝트' },
  { key: 'settings', label: '계정 설정', soon: true },
];

export function MyPage() {
  const [tab, setTab] = useState('activity');
  const navigate = useNavigate();
  const t = useT();

  return (
    <ScreenCard>
      <SiteHeader
        right={
          <button type="button" className="wf-btn" onClick={() => navigate('/')}>
            {t('로그아웃')}
          </button>
        }
      />
      <div className="row split-mobile" style={{ minHeight: 600 }}>
        <Sidebar tabs={tabs.map((tb) => ({ ...tb, label: t(tb.label) }))} active={tab} onChange={setTab} />
        <div className="grow pad32 col gap24">
          <div className="row gap16 wrap">
            <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={citizenUser.photo}
                alt={t(citizenUser.name)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col gap8" style={{ justifyContent: 'center' }}>
              <div className="h2">
                {t(citizenUser.name)} {t('님')}
              </div>
              <div className="txt">
                {t('누적 활동')} {citizenUser.activities}
                {t('회')} · {citizenUser.points}
                {t('포인트')} · {t('배지')} {citizenUser.badges}
                {t('개')}
              </div>
            </div>
          </div>
          <div className="divider2" />

          {tab === 'activity' && (
            <div className="col gap16">
              <div className="h3">{t('최근 활동 이력')}</div>
              <div className="table-scroll">
                <table>
                  <tbody>
                    <tr>
                      <th>{t('날짜')}</th>
                      <th>{t('프로젝트')}</th>
                      <th>{t('활동')}</th>
                      <th>{t('검증 상태')}</th>
                    </tr>
                    {activityHistory.map((h) => (
                      <tr key={h.date + h.project}>
                        <td>{h.date}</td>
                        <td>{t(h.project)}</td>
                        <td>{t(h.activity)}</td>
                        <td>{t(h.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'badges' && (
            <div className="col gap16">
              <div className="h3">{t('획득 배지')}</div>
              <div className="row gap16 wrap">
                {myBadges.map((b) => (
                  <BadgeCircle key={b.key} icon={b.icon} label={t(b.label)} earned={b.earned} />
                ))}
              </div>
              <div className="divider2" />
              <div className="h3">{t('발급된 인증서')}</div>
              <div className="cert-card">
                <div className="cert-inner col gap10">
                  <div className="row between">
                    <div className="label mono" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Certificate No.
                    </div>
                    <div className="txt mono">{certificate.no}</div>
                  </div>
                  <div className="divider2" />
                  <div className="row between txt">
                    <div>{t('프로젝트명')}</div>
                    <div>
                      <b>{t(certificate.project)}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>{t('활동 유형')}</div>
                    <div>
                      <b>{t(certificate.activity)}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>{t('활동 일시')}</div>
                    <div>
                      <b>{certificate.datetime}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>{t('검증 상태')}</div>
                    <Pill accent>{t(certificate.status)}</Pill>
                  </div>
                  <div className="row between txt">
                    <div>{t('복원 면적 기여')}</div>
                    <div>
                      <b>{certificate.area}</b>
                    </div>
                  </div>
                  <div className="row between txt">
                    <div>{t('예상 탄소 기여량')}</div>
                    <div>
                      <b>{certificate.carbon}</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gap8">
                <button
                  type="button"
                  className="wf-btn accent"
                  onClick={() => alert(t('데모: 인증서 PDF를 다운로드합니다.'))}
                >
                  {t('인증서 PDF 다운로드')}
                </button>
                <button type="button" className="wf-btn" onClick={() => alert(t('데모: SNS 공유 창을 엽니다.'))}>
                  {t('SNS 공유하기')}
                </button>
              </div>
            </div>
          )}

          {tab === 'projects' && (
            <div className="col gap16">
              <div className="h3">{t('참여 프로젝트')}</div>
              <div className="card-grid">
                {projects.slice(0, 2).map((p) => (
                  <div
                    key={p.id}
                    className="wf-card clickable"
                    onClick={() => navigate(`/projects/${p.id}`)}
                  >
                    <div className="wf-img" style={{ height: 120, overflow: 'hidden', padding: 0 }}>
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={t(p.name)}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        t('프로젝트 대표 이미지')
                      )}
                    </div>
                    <div className="pad16 col gap8">
                      <div className="row between">
                        <div className="h3">{t(p.name)}</div>
                        <Pill accent={p.statusVariant === 'accent'}>{t(p.status)}</Pill>
                      </div>
                      <div className="txt">
                        {t('참여자')} {p.participants}{t('명')} · {t('진행률')} {p.progress}%
                      </div>
                      <ProgressBar percent={p.progress} />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="wf-btn" onClick={() => navigate('/projects')}>
                {t('전체 프로젝트 둘러보기')}
              </button>
            </div>
          )}
        </div>
      </div>
    </ScreenCard>
  );
}
