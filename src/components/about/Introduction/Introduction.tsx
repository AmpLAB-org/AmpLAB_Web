import * as L from "../../../styles/common.styles";
import * as S from "./Introduction.styles";
import bg from "../../../assets/background/bg_5.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "../../../assets/logo/logo.ico";

const IntroductionSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-550, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [550, 0]);

  const circleScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.5]);
  
  const circleOpacity = useTransform(scrollYProgress, [0, 1, 1], [1, 1, 0]);
  
  const logoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const logoScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 0.5, 1]);

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

        <S.CirclesContainer ref={ref}>
          <motion.div 
            style={{ 
              x: leftX, 
              opacity: circleOpacity, 
              scale: circleScale,
              position: 'absolute'
            }}
          >
            <S.Circle $type="amplify">
              <S.CircleTitle><strong>Amp</strong>lify</S.CircleTitle>
              <S.CircleSubtitle>확장하다</S.CircleSubtitle>
            </S.Circle>
          </motion.div>

          <motion.div 
            style={{ 
              x: rightX, 
              opacity: circleOpacity, 
              scale: circleScale,
              position: 'absolute'
            }}
          >
            <S.Circle $type="lab">
              <S.CircleTitle><strong>LAB</strong></S.CircleTitle>
              <S.CircleSubtitle>연구소</S.CircleSubtitle>
            </S.Circle>
          </motion.div>

          <motion.div 
            style={{ 
              opacity: logoOpacity, 
              scale: logoScale,
              position: 'absolute'
            }}
          >
            <S.Logo src={Logo} alt="AmpLAB Logo" />
          </motion.div>
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

export default IntroductionSection;