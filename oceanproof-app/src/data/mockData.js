// Mock data for OceanProof demo — no backend, everything is static/local state.
import { Sprout, Trash2, ClipboardList, Medal } from 'lucide-react';

export const sponsorCompanies = {
  blueWave: { name: 'BlueWave Corp', color: '#2f7d5c' },
  greenTide: { name: 'GreenTide Holdings', color: '#3f6db0' },
};

export const projectMapMarkers = [
  { id: 'goseong-seagrass', label: '고성 잘피밭', x: 61, y: 74 },
  { id: 'busan-cleanup', label: '부산 해안 정화', x: 85, y: 54 },
  { id: 'yeosu-tidal', label: '여수 갯벌', x: 42, y: 85 },
];

export const projects = [
  {
    id: 'goseong-seagrass',
    name: '고성 잘피밭 복원 캠페인',
    image:
      'https://images.unsplash.com/photo-1629215833206-ba050a68cd65?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    status: '모집중',
    statusVariant: 'accent',
    participants: 248,
    progress: 62,
    type: '잘피 식재',
    region: '경남 고성',
    description:
      '잘피밭(해초지) 생태 구역 지정 후 시민 참여형 식재 및 모니터링을 진행하는 프로젝트입니다.',
    period: '2026.05 ~ 2026.11',
    approval: '자동 승인',
    stats: [
      { label: '복원 면적', value: '3.2ha' },
      { label: '탄소 격리량', value: '1.4t' },
      { label: '참여 시민', value: '248명' },
    ],
    sponsors: [sponsorCompanies.blueWave, sponsorCompanies.greenTide],
  },
  {
    id: 'busan-cleanup',
    name: '부산 해안 쓰레기 정화',
    image:
      'https://images.unsplash.com/photo-1758599668949-5118d71838fd?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    status: '진행중',
    statusVariant: 'default',
    participants: 412,
    progress: 80,
    type: '쓰레기 수거',
    region: '부산',
    description: '부산 해안선을 따라 시민 참여형 해양 쓰레기 수거 활동을 진행하는 프로젝트입니다.',
    period: '2026.03 ~ 2026.10',
    approval: '자동 승인',
    stats: [
      { label: '수거 목표', value: '5,000kg' },
      { label: '현재 수거량', value: '2,640kg' },
      { label: '참여 시민', value: '412명' },
    ],
    sponsors: [sponsorCompanies.blueWave],
  },
  {
    id: 'yeosu-tidal',
    name: '여수 갯벌 모니터링',
    image:
      'https://images.unsplash.com/photo-1742898932342-855022ba36ab?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    status: '진행중',
    statusVariant: 'default',
    participants: 96,
    progress: 35,
    type: '갯벌 모니터링',
    region: '여수',
    description: '여수 갯벌 생태계 변화를 시민 참여로 정기 모니터링하는 프로젝트입니다.',
    period: '2026.04 ~ 2027.03',
    approval: '관리자 승인',
    stats: [
      { label: '모니터링 구역', value: '8ha' },
      { label: '조사 회차', value: '12회'},
      { label: '참여 시민', value: '96명' },
    ],
    sponsors: [sponsorCompanies.greenTide],
  },
];

export const activityChoices = [
  { key: 'seagrass', icon: Sprout, label: '잘피 식재' },
  { key: 'cleanup', icon: Trash2, label: '쓰레기 수거' },
  { key: 'monitoring', icon: ClipboardList, label: '모니터링 기록' },
];

export const myBadges = [
  { key: 'seagrass', icon: Sprout, label: '잘피 식재', earned: true },
  { key: 'cleanup', icon: Trash2, label: '정화 활동', earned: true },
  { key: 'monitoring', icon: ClipboardList, label: '모니터링', earned: true },
  { key: 'ten', icon: Medal, label: '10회 참여', earned: false },
];

export const activityHistory = [
  { date: '2026-06-28', project: '고성 잘피밭 복원', activity: '잘피 식재', status: '검증 완료' },
  { date: '2026-06-15', project: '부산 해안 정화', activity: '쓰레기 수거', status: '검증중' },
  { date: '2026-05-30', project: '여수 갯벌 모니터링', activity: '모니터링 기록', status: '검증 완료' },
];

export const certificate = {
  no: 'OP-CERT-2026-000114',
  project: '고성 잘피밭 복원 캠페인',
  activity: '잘피 식재',
  datetime: '2026-06-28 14:22',
  status: '검증 완료',
  area: '0.02ha',
  carbon: '0.01tCO₂',
};

export const citizenUser = {
  name: '김해양',
  photo: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=80&w=200&auto=format&fit=crop',
  activities: 12,
  points: 320,
  badges: 4,
};

export const businessUser = {
  company: 'GREENERS 주식회사',
  quarter: '2026년 2분기',
  stats: [
    { label: '복원 면적', value: '8.4ha' },
    { label: '탄소 격리량 (tCO₂/년)', value: '3.6t' },
    { label: '수거 폐기물', value: '1,240kg' },
    { label: '참여 시민', value: '680명' },
  ],
};

export const govUser = {
  org: '고성군청',
  stats: [
    { label: '관할 진행 프로젝트', value: '5개' },
    { label: '연간 KPI 달성률', value: '62%' },
    { label: '누적 참여 시민', value: '1,820명' },
  ],
  kpiTable: [
    { metric: '해양 복원 면적', goal: '15ha', current: '9.3ha', rate: '62%' },
    { metric: '시민 참여 인원', goal: '2,000명', current: '1,820명', rate: '91%' },
    { metric: '해양 폐기물 수거', goal: '5,000kg', current: '2,640kg', rate: '53%' },
  ],
};

export const sponsorshipPlans = [
  {
    key: 'basic',
    label: 'Basic',
    price: '월/프로젝트 300만원~',
    features: ['프로젝트 후원', '기업 로고 노출', '기본 성과 요약 제공', '참여 시민 수 제공'],
  },
  {
    key: 'standard',
    label: 'Standard',
    price: '월/프로젝트 700만원~',
    recommended: true,
    features: [
      'Basic 포함',
      'ESG 데이터 리포트 제공',
      '탄소 격리량/복원 면적/폐기물 수거량 제공',
      '인증 배지 다운로드',
    ],
  },
  {
    key: 'premium',
    label: 'Premium',
    price: '맞춤 견적',
    features: [
      'Standard 포함',
      '맞춤형 ESG 리포트',
      '브랜딩 캠페인 페이지 제공',
      '공공기관/지역 커뮤니티 연계',
      '전담 매니저 배정',
    ],
  },
];

export const esgReport = {
  period: '2026 Q2',
  stats: [
    { label: '복원 면적', value: '8.4ha' },
    { label: '탄소 격리량 (tCO₂/년)', value: '3.6t' },
    { label: '수거 폐기물', value: '1,240kg' },
    { label: '참여 시민', value: '680명' },
  ],
  sections: [
    { title: '1. 프로젝트 개요', body: '고성·부산·여수 3개 해역에서 진행된 시민 참여형 해양 복원 프로젝트 요약 텍스트 영역' },
    { title: '2. 데이터 수집 방식', body: 'QR 기반 시민 참여, GPS·사진 증거 자동 수집 방식 설명 텍스트 영역' },
    { title: '3. MRV 검증 절차', body: '시민 입력 → 위성 검증 → 드론 샘플링 → GIS 교차검증 → 최종 데이터셋 5단계 절차 설명' },
    { title: '5. ESG 커뮤니케이션 활용 문구', body: '기업 지속가능경영보고서·홈페이지 등에 인용 가능한 문구 영역' },
  ],
  badges: ['Satellite Verified', 'GIS Cross-Checked', 'Citizen Action Logged'],
};

export const adminActivities = [
  { id: 'A-0628-114', citizen: '김해양', project: '고성 잘피밭 복원', type: '잘피 식재', stage: '3/5 드론 검증중' },
  { id: 'A-0627-098', citizen: '박바다', project: '부산 해안 정화', type: '쓰레기 수거', stage: '검증 완료' },
];

export const mrvSteps = [
  { step: 1, title: '시민 입력', desc: 'GPS 좌표, 타임스탬프 사진, 현장 활동 로그 — 접수 완료', state: 'done' },
  { step: 2, title: '위성 검증', desc: 'Sentinel 위성 영상으로 잘피밭 공간 변화 탐지 완료', state: 'done' },
  { step: 3, title: '드론 샘플링 (진행중)', desc: '고해상도 현장 조사로 밀도·식물 상태 검증 진행중', state: 'active' },
  { step: 4, title: 'GIS 교차검증', desc: '공공 GIS 데이터셋과 연계하여 이상값 탐지 예정', state: 'pending' },
  { step: 5, title: '최종 데이터셋 생성', desc: 'ESG 보고 및 정책 평가용 집계 데이터 생성 예정', state: 'pending' },
];

export const chatAnswers = {
  citizen: [
    { q: 'QR 참여는 어떻게 하나요?', a: '현장의 QR코드를 스캔하면 앱 설치 없이 바로 활동 참여 화면이 열립니다. 활동을 선택하고 GPS·사진을 제출하면 됩니다.' },
    { q: '인증서는 언제 발급되나요?', a: '시민이 제출한 활동 기록은 GPS, 사진, 위성, GIS 검증 과정을 거치며 검증 완료 후 인증서가 발급됩니다.' },
    { q: '포인트는 어디서 사용하나요?', a: '누적 활동 포인트는 마이페이지에서 확인할 수 있으며, 파트너사 혜택과 연계되어 사용 가능합니다.' },
  ],
  biz: [
    { q: '스폰서십 비용은 얼마인가요?', a: 'Basic은 월/프로젝트 300만원부터, Standard는 700만원부터 시작하며 Premium은 맞춤 견적으로 진행됩니다.' },
    { q: 'ESG 리포트 샘플을 볼 수 있나요?', a: '네, ESG 리포트 미리보기 화면에서 실제 리포트 구성과 검증 배지를 확인하실 수 있습니다.' },
    { q: '탄소 크레딧과 어떤 차이가 있나요?', a: 'OceanProof는 탄소 크레딧을 판매하는 서비스가 아니라, 해양 복원 활동을 검증 가능한 ESG 데이터와 커뮤니케이션 자료로 제공하는 플랫폼입니다.' },
  ],
  gov: [
    { q: '지역 프로젝트를 등록하려면 어떻게 하나요?', a: '관리자/공공기관 권한으로 로그인 후 프로젝트 등록 화면에서 생태 구역 지정과 함께 신규 프로젝트를 등록할 수 있습니다.' },
    { q: '정책 KPI는 어떻게 관리하나요?', a: '공공기관용 대시보드에서 복원 면적·참여 시민·폐기물 수거량 등 정책 성과 KPI를 실시간으로 추적할 수 있습니다.' },
  ],
};
