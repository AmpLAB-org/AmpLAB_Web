import styled from "styled-components";

export const Wrapper = styled.div<{
  $angle: number;
  $radius: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%)
    rotate(${p => p.$angle}deg)
    translateX(${p => p.$radius}px);
`;

export const Content = styled.div<{ $angle: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  transform: rotate(-${p => p.$angle}deg);
`;

export const Label = styled.div<{ $isActive: boolean }>`
  font-size: ${({ $isActive }) => ($isActive ? "30px" : "20px")};
  font-weight: bold;

  ${({ $isActive }) =>
    $isActive
      ? `
    background: linear-gradient(90deg, #991375, #2c008e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
      : `
    color: #a8a8a8;
  `}
`;

export const SubLabel = styled.div<{ $isActive: boolean }>`
  font-size: ${({ $isActive }) => ($isActive ? "20px" : "16px")};
  color: ${({ $isActive }) => ($isActive ? "#000" : "#a8a8a8")};
  white-space: nowrap;
  opacity: 0.8;
`;

export const Circle = styled.div<{
  $isActive: boolean;
  $color: string;
}>`
  width: 83px;
  height: 83px;
  border-radius: 50%;

  background: ${({ $isActive, $color }) =>
    $isActive ? $color : "#fff"};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
  cursor: pointer;

  border: ${({ $isActive }) =>
    $isActive ? "0.5px solid #fff" : "2px solid #a8a8a8"};

  color: ${({ $isActive }) => ($isActive ? "#fff" : "#a8a8a8")};

  box-shadow: ${({ $isActive }) =>
    $isActive
      ? "0 0 6px rgba(153,19,117,.6), 0 0 12px rgba(44,0,142,.4)"
      : "none"};

  transition: all 0.3s ease;
`;
