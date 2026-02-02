import styled from "styled-components";

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
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #ff4fd8, #7c3aed);
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
  top: 40px;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4fd8, #7c3aed);
  z-index: 2;
`;

export const Card = styled.div`
  width: 360px;
  padding: 28px;
  background: #fff;
  color: #111;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(124, 58, 237, 0.35);
`;

export const Badge = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  color: #7c3aed;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const CardDesc = styled.p`
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-line;
`;

export const GoalWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const GoalCard = styled.div`
  width: 420px;
  padding: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, #b845ed, #7c3aed);
  text-align: center;
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.6);
`;

export const GoalTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
`;

export const GoalDesc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-line;
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
