import styled from "styled-components";
import * as L from "../../../styles/home.styles"

export const SpenWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 40px 0;
`;

export const SpenTrack = styled.div`
  display: inline-flex;
  align-items: center;
  animation: ${L.slideLeft} 18s linear infinite;
`;

export const SpenText = styled.span`
  font-size: 110px;
  font-weight: 300;
  background: linear-gradient(90deg, #991375, #2c008e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 60px;
  letter-spacing: -2px;
`;
