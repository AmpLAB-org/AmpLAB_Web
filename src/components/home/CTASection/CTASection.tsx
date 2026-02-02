import * as L from "../../../styles/home.styles";
import * as S from "./CTASection.styles";
import bg2 from "../../../assets/background/bg_2.png";

const CTASection = () => {
  return (
    <L.Container bg={bg2}>
      <L.Content>
        <S.TextLight>지금 바로 효율적인 비즈니스의</S.TextLight>
        <S.TextBold>첫 걸음을 시작하세요!</S.TextBold>
      </L.Content>
      <S.Button>서비스 보러가기</S.Button>
    </L.Container>
  );
};

export default CTASection;
