import styled from "styled-components";
import * as G from "../../../styles/home.styles"

export const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 120px 0 40px;
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
