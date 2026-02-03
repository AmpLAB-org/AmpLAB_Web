import styled from "styled-components";

interface ContentPanelProps {
  $active: boolean;
  $direction: "left" | "right";
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

export const Subtitle = styled.span`
  font-size: 17px;
  font-weight: 300;
  color: #000;
`;

export const Title = styled.div`
  margin-top: 12px;
  font-size: 40px;
  color: #000;

  strong {
    font-weight: 800;
  }
`;

export const TabContainer = styled.div`
  width: 950px;
  height: 70px;
  margin-bottom: 60px;
  padding: 0 40px;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TabProps {
  $active: boolean;
}

export const Tab = styled.button<TabProps>`
  flex: 1;
  height: 70px;
  background: transparent;
  border: none;
  border-bottom: 3px solid ${(props) => (props.$active ? "#2563eb" : "#D5D5D5")};
  cursor: pointer;
`;

export const TabImage = styled.div<TabProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.$active ? "#2563eb" : "#D5D5D5")};
  transition: all 0.3s ease;
`;

export const ContentContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: 600px;
`;

interface ContentPanelProps {
  $active: boolean;
}

export const ContentPanel = styled.div<ContentPanelProps>`
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.$active ? 1 : 0)};
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};

  transform: translateX(
    ${(props) =>
      props.$active ? "0" : props.$direction === "right" ? "80px" : "-80px"}
  );

  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;

  z-index: ${(props) => (props.$active ? 2 : 1)};
`;

export const ContentImage = styled.img`
  max-width: 1000px;
  max-height: 400px;
  border-radius: 15px;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
`;
