import styled, { keyframes } from "styled-components";

const wheelMove = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Mouse = styled.div`
  width: 22px;
  height: 52px;
  border-radius: 25px;
  border: 2px solid transparent;

  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(180deg, #991375, #2c008e) border-box;

  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

export const Wheel = styled.div`
  width: 12px;
  height: 25px;
  border-radius: 50px;
  background: linear-gradient(180deg, #991375, #2c008e);
  animation: ${wheelMove} 1.8s ease-in-out infinite;
`;

export const Text = styled.p`
  margin-top: 4px;
  font-size: 16px;
  color: #3F3F3F;
`;
