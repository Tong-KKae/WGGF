import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';

export function AdminVerifyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState('');

  const decide = (action) => {
    alert(`데모: 활동 ${id ?? 'A-0628-114'}을(를) "${action}" 처리했습니다.`);
    navigate('/admin');
  };

  return (
    <ScreenCard>
      <SiteHeader suffix=" · ADMIN" backTo="/admin" backLabel="← 관리자 페이지" />
      <div className="pad32 col gap20">
        <div className="h1">활동 검증 상세</div>
        <div className="row gap16 wrap">
          <div className="col gap8" style={{ width: 300 }}>
            <div className="label">제출 사진</div>
            <div className="wf-img" style={{ height: 220 }}>
              사진 크게 보기
            </div>
            <div className="row gap8">
              <div className="wf-img grow" style={{ height: 60 }}>
                사진1
              </div>
              <div className="wf-img grow" style={{ height: 60 }}>
                사진2
              </div>
              <div className="wf-img grow" style={{ height: 60 }}>
                사진3
              </div>
            </div>
          </div>

          <div className="col gap8 grow" style={{ minWidth: 260 }}>
            <div className="label">활동 정보</div>
            <div className="wf-map" style={{ height: 160 }}>
              제출 위치 지도
            </div>
            <div className="wf-card pad16 col gap8">
              <div className="row between txt">
                <div>GPS 좌표</div>
                <div>34.xxxx, 128.xxxx</div>
              </div>
              <div className="row between txt">
                <div>촬영 시각</div>
                <div>2026-06-28 14:22</div>
              </div>
              <div className="row between txt">
                <div>제출 시각</div>
                <div>2026-06-28 14:25</div>
              </div>
              <div className="row between txt">
                <div>기기 정보</div>
                <div>iPhone 15 / Safari</div>
              </div>
              <div className="row between txt">
                <div>활동 유형</div>
                <div>잘피 식재</div>
              </div>
              <div className="row between txt">
                <div>시민 메모</div>
                <div>해안가 좌측 구역 30주 식재</div>
              </div>
            </div>
          </div>

          <div className="side-panel col gap16" style={{ padding: 24 }}>
            <div className="h3">MRV 검증 상태</div>
            <div className="row between txt">
              <div>시민 입력</div>
              <Pill accent>완료</Pill>
            </div>
            <div className="row between txt">
              <div>위성 검증</div>
              <Pill accent>완료</Pill>
            </div>
            <div className="row between txt">
              <div>드론 샘플링</div>
              <Pill>진행중</Pill>
            </div>
            <div className="row between txt">
              <div>GIS 교차검증</div>
              <Pill>대기</Pill>
            </div>
            <div className="divider2" />
            <div className="txt">이상값 감지: 없음</div>
            <div className="divider2" />
            <div className="row gap8">
              <button type="button" className="wf-btn solid grow" style={{ textAlign: 'center' }} onClick={() => decide('승인')}>
                승인
              </button>
              <button type="button" className="wf-btn grow" style={{ textAlign: 'center' }} onClick={() => decide('반려')}>
                반려
              </button>
            </div>
            <button type="button" className="wf-btn grow" style={{ textAlign: 'center' }} onClick={() => decide('추가 확인 요청')}>
              추가 확인 요청
            </button>
            <textarea
              className="wf-input"
              style={{ height: 60 }}
              placeholder="반려/추가확인 사유 입력"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ScreenCard>
  );
}
