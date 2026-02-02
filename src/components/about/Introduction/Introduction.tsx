import * as L from "../../../styles/common.styles";
import * as S from "./Introduction.styles";
import bg from "../../../assets/background/bg_5.png";

const BackgroundSection = () => {
  return (
    <L.Container>
      <L.BgImage src={bg} />
      <L.Overlay>
        <S.HeroContent>
          <S.Subtitle>Introduce AmpLAB</S.Subtitle>
          <S.Title>앰플랩 소개</S.Title>
          <S.Description>
            고객 중심 기술 실현으로 비즈니스 성공을 함께하는 기술 파트너
          </S.Description>

          <S.ButtonGroup>
            <S.PrimaryButton>Explore More</S.PrimaryButton>
            <S.SecondaryButton>Contact Us</S.SecondaryButton>
          </S.ButtonGroup>
        </S.HeroContent>

        <S.CirclesContainer>
          <S.Circle $type="amplify">
            <S.CircleTitle>Amplify</S.CircleTitle>
            <S.CircleSubtitle>확장하다</S.CircleSubtitle>
          </S.Circle>

          <S.Circle $type="lab">
            <S.CircleTitle>LAB</S.CircleTitle>
            <S.CircleSubtitle>연구소</S.CircleSubtitle>
          </S.Circle>
        </S.CirclesContainer>

        <S.BottomText>
          <strong>앰플랩(AmpLAB)은 Amplify(확장)와 Lab(연구소)의 결합</strong>
          으로 설립된 사업모델과 제품을 발굴하고 고도화하는 프로그램입니다.
          기술과 자본, 그리고 커뮤니티로 기술 혁신을 가속화하는 것을 목표로
          기업의 성장과정에 적극적으로 참여합니다.
        </S.BottomText>
      </L.Overlay>
    </L.Container>
  );
};

export default BackgroundSection;
