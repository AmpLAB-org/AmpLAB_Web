import * as S from "./RoadMap.styles";
import bg from "../../../assets/background/bg_3.svg";
import * as L from "../../../styles/common.styles";

const RoadMap = () => {
  return (
    <S.Content>
      <L.BgImage src={bg} />
      <L.Overlay>
        <S.Header>
          <S.SubTitle>How We Work</S.SubTitle>
          <S.Title>앰플랩의 핵심가치</S.Title>
        </S.Header>

        <S.Timeline>
          <S.Line />

          <S.Item $side="left">
            <S.Dot />
            <S.Card>
              <S.Badge>Value 1</S.Badge>
              <S.CardTitle>고객 성장</S.CardTitle>
              <S.CardDesc>
                고객의 비즈니스 성장을 돕고,
                <br />
                사회 전체가 성장할 수 있도록 기여합니다.
              </S.CardDesc>
            </S.Card>
          </S.Item>

          <S.Item $side="right">
            <S.Dot />
            <S.Card>
              <S.Badge>Value 2</S.Badge>
              <S.CardTitle>끈기있는 실행</S.CardTitle>
              <S.CardDesc>
                멈추지 않고 시도하며 배우고
                <br />
                끝까지 책임감 있게 실행합니다.
              </S.CardDesc>
            </S.Card>
          </S.Item>

          <S.Item $side="left">
            <S.Dot />
            <S.Card>
              <S.Badge>Value 3</S.Badge>
              <S.CardTitle>체계적인 공유</S.CardTitle>
              <S.CardDesc>
                지식과 경험을 공유하며
                <br />
                함께 성장하는 문화를 만듭니다.
              </S.CardDesc>
            </S.Card>
          </S.Item>

          <S.GoalWrap>
            <S.GoalCard>
              <S.GoalTitle>GOAL</S.GoalTitle>
              <S.GoalDesc>
                혁신으로 가능성을 확장하고
                <br />
                가치를 실현하는 앰플랩
              </S.GoalDesc>
            </S.GoalCard>
          </S.GoalWrap>
        </S.Timeline>
      </L.Overlay>
    </S.Content>
  );
};

export default RoadMap;
