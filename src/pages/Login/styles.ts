import styled from "styled-components";
import { Form } from "../../components/Form";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.darker};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BodyContainer = styled.div`
  height: calc(50vh);
  width: calc(100vw * 0.4);
  padding: 4rem;
  background-color: ${colors.background.lighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1280) {
    width: calc(100vw * 0.6);
  }
`;

export const StyledForm = styled(Form)`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 90%;
  }
`;

export const inlineStyles = {
  button: {
    width: "15rem",
  },
  inputField: { marginBottom: "1rem" },
  errorMessage: { marginBottom: "1rem" },
  title: { marginBottom: "1rem" },
};
