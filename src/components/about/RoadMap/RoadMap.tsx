import * as S from "./RoadMap.styles";
import bg from "../../../assets/background/bg_3.svg";
import { motion } from "framer-motion";
import {
  BookCheck,
  Zap,
  Globe,
  ArrowDownAZ,
  Share2,
  Handshake,
} from "lucide-react";

const RoadMap = () => {
  return (
    <S.Section>
      <S.BgImage src={bg} />

      <S.Content>
        <S.Header>
          <S.SubTitle>How We Work</S.SubTitle>
          <S.Title>앰플랩의 핵심가치</S.Title>
        </S.Header>

        <S.Timeline>
          <S.Line />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <S.Item $side="left">
              <S.Dot>
                <Zap />
              </S.Dot>

              <S.Card $side="left">
                <S.Badge $side="left" $color="pink">Value 1</S.Badge>
                <S.CardIcon $side="left" $color="pink">
                  <Handshake />
                </S.CardIcon>

                <S.CardContainer $side="right">
                  <S.CardTitle $color="pink">고객 성장</S.CardTitle>
                  <S.CardDesc $side="right">
                    고객의 비즈니스 성장을 돕고, 나아가
                    <br />
                    사회 전체가 성장할 수 있도록 기여합니다.
                  </S.CardDesc>
                </S.CardContainer>
              </S.Card>
            </S.Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <S.Item $side="right">
              <S.Dot>
                <BookCheck />
              </S.Dot>

              <S.Card $side="right">
                <S.Badge $side="right" $color="purple">Value 2</S.Badge>
                <S.CardIcon $side="right" $color="purple">
                  <ArrowDownAZ />
                </S.CardIcon>

                <S.CardContainer $side="left">
                  <S.CardTitle $color="purple">끈기있는 실행</S.CardTitle>
                  <S.CardDesc $side="left">
                    망설이지 않고 시도하고 배우며 끝까지 해결합니다.
                    <br />
                    적극적으로 행동하고 무엇이든 끝까지
                    <br />
                    책임감 있게 실행합니다.
                  </S.CardDesc>
                </S.CardContainer>
              </S.Card>
            </S.Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <S.Item $side="left">
              <S.Dot>
                <Globe />
              </S.Dot>

              <S.Card $side="left">
                <S.Badge $side="left" $color="pink">Value 3</S.Badge>
                <S.CardIcon $side="left" $color="pink">
                  <Share2 />
                </S.CardIcon>

                <S.CardContainer $side="right">
                  <S.CardTitle $color="pink">체계적인 공유</S.CardTitle>
                  <S.CardDesc $side="right">
                    우리는 정보공유보다 회고에서 배우는
                    <br />
                    지식을 공유하고 소통이 기본이라 믿습니다.
                    <br />
                    누구나 쉽게 성장할 수 있도록 경험과 지식을
                    <br />
                    공유하는것을 기본 원칙으로 삼습니다.
                  </S.CardDesc>
                </S.CardContainer>
              </S.Card>
            </S.Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <S.GoalWrap>
              <S.GoalCard>
                <S.GoalTitle>GOAL</S.GoalTitle>
                <S.GoalDesc>
                  혁신으로 가능성을 확장하고 가치를 실현하는,
                  <br />
                  <strong>우리는 앰플랩입니다.</strong>
                </S.GoalDesc>
              </S.GoalCard>
            </S.GoalWrap>
          </motion.div>
        </S.Timeline>
      </S.Content>
    </S.Section>
  );
};

export default RoadMap;
