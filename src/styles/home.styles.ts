import styled,{keyframes} from "styled-components";

export const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export interface ContainerProps {
  bg?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  background-image: ${(p) => (p.bg ? `url(${p.bg})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Container_2 = styled.div`
  padding: 150px 0;
  width: 100%;
  height: auto;
  display: flex;
  background: #fff;
  gap: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
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
