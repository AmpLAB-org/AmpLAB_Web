import * as S from "./Footer.styles";
import { Instagram, Youtube } from "lucide-react";
import Logo from "../../assets/logo/logo_4.svg";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Top>
        <S.Left>
          <S.Logo src={Logo} alt="AmplLAB Logo" />
          <S.Info>
            <S.InfoTitle>앰플랩 | 대표 김진영</S.InfoTitle>
            <S.InfoText>사업자등록번호 825-86-03341</S.InfoText>
            <S.InfoText>이메일 ceo@amplab.us</S.InfoText>
            <S.InfoText>
              본사 세종특별자치시 나성로 33-6(나성동), 503-2 <br />
              지사 (수도권) 구리시 갈매중앙로 190, 휴밸나인 H동(기숙사동)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(광주) 광주광역시 동구 금남로 193-12, 광주 AI창업캠프 1호점 6층
            </S.InfoText>
          </S.Info>
        </S.Left>

        <S.Icons>
          <Instagram size={22} />
          <Youtube size={22} />
        </S.Icons>
      </S.Top>

      <S.Line />

      <S.Copyright>2025 ⓒ BY AMPLAB ALL RIGHTS RESERVED.</S.Copyright>
    </S.FooterWrapper>
  );
};

export default Footer;
