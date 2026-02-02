import * as L from "../../../styles/common.styles";
import Slogan from "../../Slogan/Slogan";
import sloganBg from "../../../assets/background/bg_4.png";
import * as S from "./SloganSection.styles";

const SloganSection = () => {
  return (
    <L.Container>
      <L.BgImage src={sloganBg} />
      <S.SloganSectionContainer>
        <S.SloganWrapper>
          <S.SubTitle>AI를 손쉽게 활용하는 경험, 그 AX를 만드는 팀</S.SubTitle>
          <S.Title>앰플랩 AmpLAB</S.Title>
        </S.SloganWrapper>
        <S.SloganSectionInner>
          <Slogan
            head_details={
              <>
                우리는 고객이 반복하고 있는 습관적인 비효율 문제를 먼저
                발견하고,
                <br />
              </>
            }
            strong="이를 해결하는 솔루션을 직접 만듭니다."
          />

          <Slogan
            head_details={
              <>
                짧은 시간 내 다양한 시장에서 제품을 출시하고, 지속적인 확장을
                통해 <br /> 더 많은 기업과 사람들이
              </>
            }
            strong="효율적으로 일할 수 있도록"
            tail_details=" 돕고 있습니다."
          />

          <Slogan
            head_details={
              <>
                고객 중심 기술 실현을 기반으로 한 비즈니스 성공 파트너이자,
                <br />
              </>
            }
            strong="실력과 신뢰를 갖춘 기술 기업"
            tail_details="입니다."
          />
        </S.SloganSectionInner>
      </S.SloganSectionContainer>
    </L.Container>
  );
};

export default SloganSection;
