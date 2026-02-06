import styled from "styled-components";

interface CardProps {
  $side: "left" | "right";
  $color: "purple" | "pink";
}

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 300px 0;
  overflow: hidden;
`;

export const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bolder;
`;

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 85%;
  background: linear-gradient(180deg, #991375, #0057b8);
  z-index: -1;
`;

export const Item = styled.div<{ $side: "left" | "right" }>`
  position: relative;
  display: flex;
  justify-content: ${({ $side }) =>
    $side === "left" ? "flex-start" : "flex-end"};
`;

export const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(90deg, #991375, #2c008e);
  border: 1.5px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 5px;
`;

export const Card = styled.div<{ $side: "left" | "right" }>`
  position: relative;
  width: 400px;
  height: 200px;
  padding: 23px 26px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(124, 58, 237, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 42px;
`;

export const Badge = styled.span<CardProps>`
  align-self: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ $color }) =>
    $color === "purple"
      ? "rgba(44,0,142,0.1)"
      : "rgba(153,19,117,0.1)"};
  color: ${({ $color }) => ($color === "purple" ? "#2C008E" : "#991375")};
  font-weight: bold;
`;

export const CardIcon = styled.div<CardProps>`
  position: absolute;
  ${({ $side }) => ($side === "left" ? "left: 26px;" : "right: 26px;")}

  svg {
    width: 100px;
    height: 100px;
    opacity: 0.3;
    color: ${({ $color }) =>
      $color === "purple" ? "#2C008E" : "#991375"};
  }
`;

export const CardTitle = styled.h3<{ $color: "purple" | "pink" }>`
  font-size: 24px;
  padding-bottom: 12px;
  color: ${({ $color }) => ($color === "purple" ? "#2C008E" : "#991375")};
`;

export const CardDesc = styled.p<{ $side: "left" | "right" }>`
  font-size: 16px;
  font-weight: lighter;
  line-height: 1.4;
  text-align: ${({ $side }) => ($side === "left" ? "left" : "right")};
`;

export const GoalWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const GoalCard = styled.div`
  width: 400px;
  padding: 36px 23px;
  border-radius: 15px;
  background: linear-gradient(90deg, #991375, #2c008e);
  text-align: center;
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.6);
  color: #fff;
`;

export const GoalTitle = styled.h2`
  font-size: 60px;
  font-weight: bolder;
`;

export const GoalDesc = styled.p`
  font-size: 20px;

  strong {
    font-weight: bolder;
  }
`;

export const CardContainer = styled.div<{ $side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $side }) =>
    $side === "left" ? "flex-start" : "flex-end"};
`;