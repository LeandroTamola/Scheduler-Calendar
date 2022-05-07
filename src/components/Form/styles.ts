import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ErrorMessage = styled.p`
  color: ${colors.danger.neutral};
  margin-top: 0.3rem;
`;

export const Input = styled.input`
  border-width: 0.1rem;
  border-radius: 5px;
  padding: 0.5rem;
  border-color: ${colors.text.lighter};
  width: 100%;
`;

export const LabelText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;
