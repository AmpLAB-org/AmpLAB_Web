import styled from "styled-components";
import * as L from "../../../styles/common.styles";

export const SpenWrapper = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 200px;
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
