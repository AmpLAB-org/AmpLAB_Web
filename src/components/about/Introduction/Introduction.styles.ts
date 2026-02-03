import styled from "styled-components";

export const HeroContent = styled.div`
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 17px;
  color: #333;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(90deg, #991375, #2c008e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #3f3f3f;
  font-weight: lighter;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  height: 43px;
  padding: 11px 28px;
  border-radius: 59px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  position: relative;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 59px;
    padding: 2px;
    background: linear-gradient(90deg, #991375, #2c008e);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 57px;
    background: linear-gradient(
      90deg,
      rgba(153, 19, 117, 0.1),
      rgba(44, 0, 142, 0.1)
    );
    z-index: -1;
  }

  span {
    background: linear-gradient(90deg, #991375, #2c008e);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: #fff;
  border: 1px solid #3f3f3f;
  color: #3f3f3f;

  &::before,
  &::after {
    content: none;
  }
`;

export const CirclesContainer = styled.div`
  width: 700px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 0;
`;

export const Circle = styled.div<{ $type: "amplify" | "lab" }>`
  width: 358px;
  height: 358px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $type }) =>
    $type === "amplify"
      ? `
        left: 0;
        background: rgba(153, 19, 117, 0.1);
        border: 1px solid #991375;
      `
      : `
        right: 0;
        background: rgba(44, 0, 142, 0.15);
        border: 1px solid #2C008E;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
`;