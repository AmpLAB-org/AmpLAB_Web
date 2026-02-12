import styled from "styled-components";

interface InnerDotProps {
  $activeAngle: number;
  $distance?: string;
}

interface OutCircleProps {
  $activeAngle: number;
}

export const CircleWrapper = styled.div`
  padding: 200px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCircle = styled.div`
  width: 565px;
  height: 565px;
  border-radius: 50%;
  position: relative;
  background: #fff;
  box-shadow: 8px 8px 47px rgba(44, 0, 142, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 130px;
`;

export const CenterLogo = styled.div`
  width: 344px;
  height: 73px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg path {
    fill: #cfcfcf;
    transition: fill 0.3s ease;
  }
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 300;
`;

export const InnerDot = styled.div<InnerDotProps>`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #991375, #2c008e);

  transform: translate(-50%, -50%) rotate(${(p) => p.$activeAngle}deg)
    translateX(${(p) => p.$distance ?? "200px"});

  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const correctedAngle = (angle: number) => (angle + 90 + 360) % 360;

export const OutCircle = styled.div<OutCircleProps>`
  width: 595px;
  height: 595px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;

    background: conic-gradient(
      #e3e3e3 0deg,
      #e3e3e3 ${(p) => correctedAngle(p.$activeAngle - 12)}deg,

      #991375 ${(p) => correctedAngle(p.$activeAngle - 6)}deg,
      #2c008e ${(p) => correctedAngle(p.$activeAngle)}deg,
      #991375 ${(p) => correctedAngle(p.$activeAngle + 6)}deg,

      #e3e3e3 ${(p) => correctedAngle(p.$activeAngle + 12)}deg,
      #e3e3e3 360deg
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 45px;
  background-color: #000;
  margin: 45px;
`;

export const Letter = styled.div<{ $active: boolean }>`
  svg path {
    fill: ${({ $active }) => ($active ? "url(#ampGradient)" : "#CFCFCF")};
    transition: all 0.3s ease;
    stroke: ${({ $active }) => ($active ? "#ffffff" : "none")};
    stroke-width: ${({ $active }) => ($active ? "1" : "0")};
  }
`;
