import * as S from "./ScrollIndicator.styles";

const ScrollIndicator = () => {
  return (
    <S.Wrapper>
      <S.Mouse>
        <S.Wheel />
      </S.Mouse>
      <S.Text>Scroll</S.Text>
    </S.Wrapper>
  );
};

export default ScrollIndicator;
