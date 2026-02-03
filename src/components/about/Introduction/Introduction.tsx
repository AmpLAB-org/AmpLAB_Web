import * as L from "../../../styles/common.styles";
import * as S from "./Introduction.styles";
import bg from "../../../assets/background/bg_5.png";

const BackgroundSection = () => {
  return (
    <L.Container>
      <L.BgImage src={bg} />
      <L.Overlay>
        <S.HeroContent>
          <S.Content>
            <div>
              <S.Subtitle>Introduce AmpLAB</S.Subtitle>
              <S.Title>앰플랩 소개</S.Title>
            </div>
            <S.Description>
              고객 중심 기술 실현으로 비즈니스 성공을 함께하는 기술 파트너
            </S.Description>
          </S.Content>

          <S.ButtonGroup>
            <S.PrimaryButton>
              <span>Explore More</span>
            </S.PrimaryButton>
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
          으로
          <br />
          더 많은 가치를 연구하고 확장하는 경험을 제공하는 기업입니다.
          <br />
          파트너와 함께 더 나은 확장을 목표로 솔루션을 연구하고 개발합니다.
        </S.BottomText>
      </L.Overlay>
    </L.Container>
  );
};

export default BackgroundSection;
