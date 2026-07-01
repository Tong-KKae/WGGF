// Lightweight demo i18n: KR -> EN dictionary for key marketing copy.
// Falls back to the original Korean string when no translation exists,
// so the language toggle is safe to use anywhere without breaking layout.
import { useApp } from './context/AppContext';

const dict = {
  '시민의 해양 복원 참여를,\n측정 가능한 ESG 자산으로':
    'Turning Citizen Ocean Restoration\ninto Measurable ESG Assets',
  '위성·드론·GIS 복합 검증을 통해 시민 참여 데이터를 신뢰할 수 있는 환경 데이터로 전환하는 통합 디지털 플랫폼입니다.':
    'An integrated digital platform that converts citizen participation into trusted environmental data through satellite, drone, and GIS verification.',
  'QR로 참여 시작하기': 'Start via QR',
  '기업/기관 도입 문의': 'Business Inquiry',
  '어떤 목적으로 방문하셨나요?': 'What brings you here today?',
  'OceanProof는 이렇게 작동합니다': 'How OceanProof Works',
  '참여하기': 'Join',
  '프로젝트': 'Projects',
  '스폰서십': 'Sponsorship',
  '도입 문의': 'Inquiry',
  '마이페이지': 'My Page',
  '해양 복원 프로젝트 스폰서십': 'Ocean Restoration Project Sponsorship',
  '기업은 해양 복원 프로젝트를 후원하고, 검증된 환경 임팩트 데이터를 ESG 리포트와 브랜딩 자료로 활용할 수 있습니다.':
    'Businesses can sponsor ocean restoration projects and use verified environmental impact data in ESG reports and branding materials.',
  '기업·기관 도입 문의': 'Business / Institution Inquiry',
  'OceanProof는 해양 복원 활동을 검증 가능한 ESG 데이터로 전환하여 기업과 공공기관의 지속가능성 보고를 지원합니다.':
    'OceanProof converts ocean restoration activities into verifiable ESG data, supporting sustainability reporting for businesses and public institutions.',
};

export function useT() {
  const { lang } = useApp();
  return (kr) => (lang === 'EN' && dict[kr] ? dict[kr] : kr);
}
