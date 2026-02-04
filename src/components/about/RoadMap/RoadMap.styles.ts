import styled from "styled-components";

interface CardProps {
  $side: "left" | "right";
  $color: "purple" | "pink";
}

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
  height: 84%;
  background: linear-gradient(180deg, #991375, #0057b8);
  z-index: -1;
`;

export const Item = styled.div<{ $side: "left" | "right" }>`
  position: relative;
  display: flex;
  justify-content: ${({ $side }) =>
    $side === "left" ? "flex-start" : "flex-end"};
  text-align: ${({ $side }) => ($side === "left" ? "right" : "left")};
  align-items: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};
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
  box-shadow:
    0 0 6px rgba(153, 19, 117, 0.6),
    0 0 12px rgba(44, 0, 142, 0.4);
  border: 1.5px solid #fff;
  z-index: 2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const Card = styled.div<{ $side: "left" | "right" }>`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 23px 26px;
  background: #fff;
  color: #111;
  border-radius: 16px;
  box-shadow: 0 0px 25px rgba(124, 58, 237, 0.15);
  justify-content: space-between;
`;

export const Badge = styled.span<CardProps>`
  align-self: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};

  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ $color }) =>
    $color === "purple"
      ? "rgba(44, 0, 142, 0.1)"
      : "rgba(153, 19, 117, 0.1)"};
  color: ${({ $color }) => ($color === "purple" ? "#2C008E" : "#991375")};
  font-weight: bold;
`;

export const CardTitle = styled.h3<{$color: "purple" | "pink"}>`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 12px;
  color: ${({ $color }) => ($color === "purple" ? "#2C008E" : "#991375")};
`;

export const CardDesc = styled.p`
  font-size: 16px;
  font-weight: lighter;
  white-space: pre-line;
  line-height: 1.4;
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
  white-space: pre-line;
  strong {
    font-weight: bolder;
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 300px 0;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardIcon = styled.div<CardProps>`
  position: absolute;

  svg {
    width: 100px;
    height: 100px;
    color: ${({ $color }) => ($color === "purple" ? "#2C008E" : "#991375")};
    opacity: 0.3;
  }

  ${({ $side }) =>
    $side === "left"
      ? `
        left: 26px;
      `
      : `
        right: 26px;
      `}
`;
