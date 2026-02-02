import styled from "styled-components";

export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: lighter;
  color: #fff;
  margin: 0;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

export const SloganWrapper = styled.div`
  gap: 5px;
`;

export const SloganSectionContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;

  gap: 60px;
  padding:70px 200px;
`;

export const SloganSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
