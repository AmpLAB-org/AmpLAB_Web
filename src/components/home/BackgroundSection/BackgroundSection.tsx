import { useState } from "react";
import * as L from "../../../styles/common.styles";
import * as S from "./BackgroundSection.styles";
import RadialMenuItem from "../../../components/RadialMenuItem/ReadiaMenuItem";
import bg3 from "../../../assets/background/bg_3.svg";
import { menuItems } from "../../../data/BackgroundSection";
import Logo from "../../../assets/logo/logo_2.png";
import * as LogoText from "../../../assets/logoText";

const BackgroundSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeItem = menuItems[activeIndex];

  return (
    <L.Container style={{ overflow: "visible" }}>
      <L.BgImage src={bg3} />
      <L.Overlay style={{ overflow: "visible" }}>
        <L.Content style={{ overflow: "visible" }}>
          <L.TextOverlay>고객 중심 기술 실현으로</L.TextOverlay>
          <L.TextOverlay>
            <strong>비즈니스 성공을 함께하는 기술 파트너</strong>
          </L.TextOverlay>
          <L.CardSubtitle>
            We make products and amplify them to accelerate business.
          </L.CardSubtitle>
          <S.Line />
          <S.Description>
            앰플랩은 제품을 만들고, 가치를 증폭하며, 비즈니스를 가속하는
            프로덕트 실험실입니다
          </S.Description>
        </L.Content>

        <S.CircleWrapper>
          <S.OutCircle $activeAngle={activeItem.angle}>
            <S.MainCircle>
              <S.Logo src={Logo} alt="Logo" />
              <S.CenterLogo>
                <S.Letter $active={activeItem.id === "A1"}>
                  <LogoText.A />
                </S.Letter>

                <S.Letter $active={activeItem.id === "M"}>
                  <LogoText.M />
                </S.Letter>

                <S.Letter $active={activeItem.id === "P"}>
                  <LogoText.P />
                </S.Letter>

                <S.Letter $active={activeItem.id === "L"}>
                  <LogoText.L />
                </S.Letter>

                <S.Letter $active={activeItem.id === "A2"}>
                  <LogoText.A />
                </S.Letter>

                <S.Letter $active={activeItem.id === "B"}>
                  <LogoText.B />
                </S.Letter>
              </S.CenterLogo>

              <S.InnerDot $activeAngle={activeItem.angle} $distance="250px" />

              {menuItems.map((item, index) => (
                <RadialMenuItem
                  key={item.id}
                  item={item}
                  radius={450}
                  isActive={index === activeIndex}
                  onHover={() => setActiveIndex(index)}
                />
              ))}
            </S.MainCircle>
          </S.OutCircle>
        </S.CircleWrapper>
      </L.Overlay>
    </L.Container>
  );
};

export default BackgroundSection;
