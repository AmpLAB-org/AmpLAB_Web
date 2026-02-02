import styled from "styled-components";

interface Props {
  bg: string;
}

interface InnerDotProps {
  $activeAngle: number;
  $distance?: string;
}

export const Container = styled.section<Props>`
  width: 100%;
  height: 100vh;
  background: url(${(p) => p.bg}) center / cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OutCircle = styled.div`
  width: 695px;
  height: 695px;
  border-radius: 50%;
  border: 3px solid #e3e3e3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainCircle = styled.div`
  width: 665px;
  height: 665px;
  border-radius: 50%;
  background: #fff;
  position: relative;
box-shadow: 8px 8px 47px rgba(44, 0, 142, 0.15);
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
