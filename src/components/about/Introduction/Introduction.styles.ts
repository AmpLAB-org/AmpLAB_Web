import styled from "styled-components";

export const HeroContent = styled.div`
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #444;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  border-radius: 50%;
  background: linear-gradient(135deg, #b845ed, #7c3aed);
  color: #fff;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  padding: 12px 28px;
  border-radius: 50%;
  background: transparent;
  color: #333;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const CirclesContainer = styled.div`
  width: 700px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -45px;
`;

export const Circle = styled.div<{ $type: "amplify" | "lab" }>`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  backdrop-filter: blur(12px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $type }) =>
    $type === "amplify"
      ? `
        left: 0;
        background: rgba(255, 0, 128, 0.15);
        border: 2px solid #ff4fd8;
      `
      : `
        right: 0;
        background: rgba(124, 58, 237, 0.15);
        border: 2px solid #7c3aed;
      `}
`;

export const CircleTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

export const CircleSubtitle = styled.p`
  font-size: 16px;
  margin-top: 8px;
`;

export const BottomText = styled.p`
  text-align: center;
  color: #3f3f3f;
  font-size: 18px;
  line-height: 1.6;
`;
