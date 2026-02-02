import styled from "styled-components";

export const Title = styled.span`
  font-size: 50px;
  color: #3f3f3f;
  font-weight: bold;
`;

export const Subtitle = styled(Title)`
  font-weight: 900;
  background: linear-gradient(90deg, #991375, #2c008e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #3f3f3f;
`;
