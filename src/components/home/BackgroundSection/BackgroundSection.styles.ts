import styled from "styled-components";

interface Props {
  bg: string;
}

interface InnerDotProps {
  $activeAngle: number;
  $distance?: string;
}

interface OutCircleProps {
  $activeAngle: number;
}

export const Container = styled.section<Props>`
  width: 100%;
  height: 100vh;
  background: url(${(p) => p.bg}) center / cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainCircle = styled.div<{ img: string }>`
  width: 665px;
  height: 665px;
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

export const OutCircle = styled.div<OutCircleProps>`
  width: 695px;
  height: 695px;
  border-radius: 50%;
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
      from 90deg,
      #e3e3e3 0deg,
      #e3e3e3 ${(p) => p.$activeAngle - 12}deg,

      #991375 ${(p) => p.$activeAngle - 6}deg,
      #2c008e ${(p) => p.$activeAngle}deg,
      #991375 ${(p) => p.$activeAngle + 6}deg,

      #e3e3e3 ${(p) => p.$activeAngle + 12}deg,
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
