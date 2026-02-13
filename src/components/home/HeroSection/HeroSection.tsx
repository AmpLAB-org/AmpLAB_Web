import * as L from "../../../styles/common.styles";
import * as S from "./HeroSection.styles";
import logo from "../../../assets/logo/logo_2.png";
import bg1 from "../../../assets/background/bg_1.png";
import ScrollIndicator from "../../ScrollIndicator/ScrollIndicator";

const HeroSection = () => {
  return (
    <L.Container>
      <L.Bg img={bg1}>
        <L.Overlay>
          <L.Content>
            <S.Title>AI와 기술로</S.Title>
            <S.Title>더 나은 확장을 연구하는 파트너,</S.Title>
            <S.Subtitle>AmpLAB</S.Subtitle>
            <S.Description>
              가치를 확장하고, 비즈니스 성공을 함께 만들어갑니다.
            </S.Description>
            <img src={logo} alt="logo" />
            <ScrollIndicator />
          </L.Content>
        </L.Overlay>
      </L.Bg>
    </L.Container>
  );
};

export default HeroSection;
