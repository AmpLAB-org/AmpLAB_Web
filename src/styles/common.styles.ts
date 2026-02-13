import styled, { keyframes } from "styled-components";

export const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export interface ContainerProps {
  bg?: string;
}

export const Container = styled.section`
  width: 100%;
  position: relative;
`;

export const BgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Bg = styled.div<{img : string}>`
  width: 100%;
  height: 100vh;
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextOverlay = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: #3f3f3f;

  strong {
    font-weight: 800;
  }
`;

export const CardSubtitle = styled.span`
  font-size: 17px;
  font-weight: lighter;
  color: #333333;
`;
