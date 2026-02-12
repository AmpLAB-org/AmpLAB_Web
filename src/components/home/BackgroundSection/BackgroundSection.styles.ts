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

export const MainCircle = styled.div<{ img: string }>`
  width: 565px;
  height: 565px;
  border-radius: 50%;
  position: relative;
  background: #fff;
  box-shadow: 8px 8px 47px rgba(44, 0, 142, 0.15);

  &::before {
    content: "";
    position: absolute;

    width: 70%;
    height: 70%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;

    background-image: url(${(p) => p.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    z-index: 1;
    pointer-events: none;
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
