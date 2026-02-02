export interface ServiceMenuItem {
  id: string;
  letter: string;
  angle: number;
  label: string;
  subLabel: string;
  color: string;
}

export const menuItems: ServiceMenuItem[] = [
  {
    id: "product",
    letter: "P",
    angle: 0,
    label: "Product",
    subLabel: "시장에 통하는 제품으로 완성합니다",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
  {
    id: "accelerate",
    letter: "A",
    angle: 45,
    label: "Accelerate",
    subLabel: "성장을 가속하는 전략 설계",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
  {
    id: "business",
    letter: "B",
    angle: 135,
    label: "Business",
    subLabel: "지속 가능한 비즈니스로 연결",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
  {
    id: "amplify",
    letter: "A",
    angle: 180,
    label: "Amplify",
    subLabel: "아이디어와 문제의 본질을 증폭합니다",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
  {
    id: "make",
    letter: "M",
    angle: 225,
    label: "Make",
    subLabel: "실행 가능한 형태로 구현합니다",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
  {
    id: "lab",
    letter: "L",
    angle: 315,
    label: "Lab",
    subLabel: "실험하고 검증하는 환경",
    color: "linear-gradient(135deg, #991375, #2C008E)",
  },
];
