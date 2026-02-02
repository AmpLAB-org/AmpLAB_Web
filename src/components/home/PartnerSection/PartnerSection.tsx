import * as L from "../../../styles/home.styles";
import * as S from "./PartnerSection.styles";
import * as C from "../../../assets/company";

const logos = Object.values(C);

const PartnerSection = () => {
  return (
    <L.Container_2>
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
    </L.Container_2>
  );
};

export default PartnerSection;
