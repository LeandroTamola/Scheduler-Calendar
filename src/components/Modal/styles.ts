import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 90;
`;

export const BodyContainer = styled.div`
  background-color: ${colors.background.lighter};
  width: calc(100vw / 2);
  padding: 2rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const inlineStyles = {
  button: { width: "3rem", borderRadius: "0.3rem" },
};
