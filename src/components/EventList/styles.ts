import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  flex: 0.05;
`;

export const Input = styled.input`
  border-width: 0.1rem;
  border-radius: 5px;
  padding: 0.4rem;
  border-color: ${colors.text.lighter};
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ListContainer = styled.div`
  flex: 0.95;
  overflow-y: auto;
`;

export const ListElement = styled.li`
  margin-bottom: 0.5rem;
`;

export const inlineStyles = {
  errorMessage: { marginBottom: "2rem" },
};
