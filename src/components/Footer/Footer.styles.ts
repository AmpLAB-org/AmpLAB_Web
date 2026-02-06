import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #383838;
  padding: 60px 120px 40px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Left = styled.div`
  display: flex;
  gap: 24px;
`;

export const Logo = styled.img`
  width: 158px;
  height: 44px;
`;

export const Info = styled.div`
  line-height: 1.8;
`;

export const InfoTitle = styled.p`
  font-weight: lighter;
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: lighter;
  color: #999999;
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;

  svg {
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 40px 0 24px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;


export const Copyright = styled.p`
  font-size: 13px;
  text-align: center;
  opacity: 0.8;
`;
