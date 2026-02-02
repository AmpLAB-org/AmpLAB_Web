import * as S from "./ReadiaMenuItem.styles";
import { type ServiceMenuItem } from "../../data/BackgroundSection";

interface Props {
  item: ServiceMenuItem;
  isActive: boolean;
  radius: number;
  onHover: () => void;
}

const RadialMenuItem = ({ item, isActive, radius, onHover }: Props) => {
  return (
    <S.Wrapper $angle={item.angle} $radius={radius}>
      <S.Content $angle={item.angle}>
        <S.Label $isActive={isActive}>{item.label}</S.Label>
        <S.SubLabel $isActive={isActive}>{item.subLabel}</S.SubLabel>

        <S.Circle
          $isActive={isActive}
          $color={item.color}
          onMouseEnter={onHover}
        >
          {item.letter}
        </S.Circle>
      </S.Content>
    </S.Wrapper>
  );
};

export default RadialMenuItem;
