import { useState } from "react";
import * as S from "./ServiceIntroSection.styles";
import { services } from "../../../data/Service";

const ServiceIntroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);

  const handleTabClick = (index: number) => {
    setPrevTab(activeTab);
    setActiveTab(index);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Subtitle>Introduce Our Service</S.Subtitle>
        <S.Title>
          <strong>앰플랩 서비스를</strong> 소개합니다
        </S.Title>
      </S.Header>

      <S.TabContainer>
        <S.TabList>
          {services.map((service, index) => (
            <S.Tab
              key={service.id}
              $active={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              <S.TabImage $active={activeTab === index}>
                {service.name}
              </S.TabImage>
            </S.Tab>
          ))}
        </S.TabList>
      </S.TabContainer>

      <S.ContentContainer>
        {services.map((service, index) => (
          <S.ContentPanel
            key={service.id}
            $active={activeTab === index}
            $direction={index > prevTab ? "right" : "left"}
          >
            <S.ContentImage src={service.img} alt={service.name} />
          </S.ContentPanel>
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};

export default ServiceIntroSection;
