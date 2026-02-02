import * as S from "./SloganMarqueeSection.styles";

const SloganMarqueeSection = () => {
  return (
    <S.SpenWrapper>
      <S.SpenTrack>
        {Array(5)
          .fill("GRIT IN ACTION")
          .map((text, idx) => (
            <S.SpenText key={idx}>{text}</S.SpenText>
          ))}
      </S.SpenTrack>
    </S.SpenWrapper>
  );
};

export default SloganMarqueeSection;
