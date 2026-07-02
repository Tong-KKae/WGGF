import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';
import { useT } from '../i18n';

export function AdminVerifyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const t = useT();

  const decide = (action) => {
    alert(t('데모: 활동 {id}을(를) "{action}" 처리했습니다.').replace('{id}', id ?? 'A-0628-114').replace('{action}', t(action)));
    navigate('/admin');
  };

  return (
    <ScreenCard>
      <SiteHeader suffix=" · ADMIN" backTo="/admin" backLabel={t('← 관리자 페이지')} />
      <div className="pad32 col gap20">
        <div className="h1">{t('활동 검증 상세')}</div>
        <div className="row gap16 wrap">
          <div className="col gap8" style={{ width: 300 }}>
            <div className="label">{t('제출 사진')}</div>
            <div className="wf-img" style={{ height: 220 }}>
              {t('사진 크게 보기')}
            </div>
            <div className="row gap8">
              <div className="wf-img grow" style={{ height: 60 }}>
                {t('사진')}1
              </div>
              <div className="wf-img grow" style={{ height: 60 }}>
                {t('사진')}2
              </div>
              <div className="wf-img grow" style={{ height: 60 }}>
                {t('사진')}3
              </div>
            </div>
          </div>

          <div className="col gap8 grow" style={{ minWidth: 260 }}>
            <div className="label">{t('활동 정보')}</div>
            <div className="wf-map" style={{ height: 160 }}>
              {t('제출 위치 지도')}
            </div>
            <div className="wf-card pad16 col gap8">
              <div className="row between txt">
                <div>{t('GPS 좌표')}</div>
                <div>34.xxxx, 128.xxxx</div>
              </div>
              <div className="row between txt">
                <div>{t('촬영 시각')}</div>
                <div>2026-06-28 14:22</div>
              </div>
              <div className="row between txt">
                <div>{t('제출 시각')}</div>
                <div>2026-06-28 14:25</div>
              </div>
              <div className="row between txt">
                <div>{t('기기 정보')}</div>
                <div>iPhone 15 / Safari</div>
              </div>
              <div className="row between txt">
                <div>{t('활동 유형')}</div>
                <div>{t('잘피 식재')}</div>
              </div>
              <div className="row between txt">
                <div>{t('시민 메모')}</div>
                <div>{t('해안가 좌측 구역 30주 식재')}</div>
              </div>
            </div>
          </div>

          <div className="side-panel col gap16" style={{ padding: 24 }}>
            <div className="h3">{t('MRV 검증 상태')}</div>
            <div className="row between txt">
              <div>{t('시민 입력')}</div>
              <Pill accent>{t('완료')}</Pill>
            </div>
            <div className="row between txt">
              <div>{t('위성 검증')}</div>
              <Pill accent>{t('완료')}</Pill>
            </div>
            <div className="row between txt">
              <div>{t('드론 샘플링')}</div>
              <Pill>{t('진행중')}</Pill>
            </div>
            <div className="row between txt">
              <div>{t('GIS 교차검증')}</div>
              <Pill>{t('대기')}</Pill>
            </div>
            <div className="divider2" />
            <div className="txt">{t('이상값 감지: 없음')}</div>
            <div className="divider2" />
            <div className="row gap8">
              <button
                type="button"
                className="wf-btn solid grow"
                style={{ textAlign: 'center' }}
                onClick={() => decide('승인')}
              >
                {t('승인')}
              </button>
              <button type="button" className="wf-btn grow" style={{ textAlign: 'center' }} onClick={() => decide('반려')}>
                {t('반려')}
              </button>
            </div>
            <button
              type="button"
              className="wf-btn grow"
              style={{ textAlign: 'center' }}
              onClick={() => decide('추가 확인 요청')}
            >
              {t('추가 확인 요청')}
            </button>
            <textarea
              className="wf-input"
              style={{ height: 60 }}
              placeholder={t('반려/추가확인 사유 입력')}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ScreenCard>
  );
}
