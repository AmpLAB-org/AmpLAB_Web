import styled from "styled-components";
import * as G from "../../../styles/common.styles";

export const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 0 20px;
`;

export const Marquee = styled.div`
  display: flex;
  gap: 40px;
  width: max-content;
  animation: ${G.slideLeft} 30s linear infinite;
`;

export const CompanyCard = styled.div`
  width: 224px;
  height: 107px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 4px 4px 17.6px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
`;

export const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export const Container = styled.div`
  padding: 100px 0;
  width: 100%;
  height: auto;
  display: flex;
  background: #fff;
  gap: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
