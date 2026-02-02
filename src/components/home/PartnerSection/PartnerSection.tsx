import * as L from "../../../styles/common.styles";
import * as S from "./PartnerSection.styles";
import * as C from "../../../assets/company";

const logos = Object.values(C);

const PartnerSection = () => {
  return (
    <S.Container>
      <L.TextOverlay>
        세상을 바꿀 <strong>앰플랩</strong>과 함께합니다
      </L.TextOverlay>

      <S.MarqueeWrapper>
        <S.Marquee>
          {[...logos, ...logos].map((logo, idx) => (
            <S.CompanyCard key={idx}>
              <S.Logo src={logo} alt="company" />
            </S.CompanyCard>
          ))}
        </S.Marquee>
      </S.MarqueeWrapper>
    </S.Container>
  );
};

export default PartnerSection;
