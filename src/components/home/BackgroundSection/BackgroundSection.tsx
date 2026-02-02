import { useState } from "react";
import * as L from "../../../styles/home.styles";
import * as S from "./BackgroundSection.styles";
import RadialMenuItem from "../../../components/RadialMenuItem/ReadiaMenuItem";
import bg3 from "../../../assets/background/bg_3.svg";
import { menuItems } from "../../../data/BackgroundSection";
import logo from "../../../assets/logo/Group 21.svg";

const BackgroundSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeItem = menuItems[activeIndex];

  return (
    <L.Container_2>
      <L.Content>
        <L.TextOverlay>고객 중심 기술 실현으로</L.TextOverlay>
        <L.TextOverlay>
          <strong>비즈니스 성공을 함께하는 기술 파트너</strong>
        </L.TextOverlay>
        <L.CardSubtitle>
          We make products and amplify them to accelerate business.
        </L.CardSubtitle>
        <S.Description>
          앰플랩은 제품을 만들고, 가치를 증폭하며, 비즈니스를 가속하는 프로덕트
          실험실입니다
        </S.Description>
      </L.Content>

      <S.Container bg={bg3}>
        <S.OutCircle $activeAngle={activeItem.angle}>
          <S.MainCircle img={logo}>
            <S.InnerDot $activeAngle={activeItem.angle} $distance="300px" />
            {menuItems.map((item, index) => (
              <RadialMenuItem
                key={item.id}
                item={item}
                radius={500}
                isActive={index === activeIndex}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </S.MainCircle>
        </S.OutCircle>
      </S.Container>
    </L.Container_2>
  );
};

export default BackgroundSection;
