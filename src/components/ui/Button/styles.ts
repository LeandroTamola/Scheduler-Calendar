import styled, { css } from "styled-components";
import { colors } from "../../../constants/colors";

export const StyledButton = styled.button`
  border-width: 1px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  ${(props) =>
    props.theme === "primary" &&
    css`
      background-color: ${colors.primary.neutral};
      color: ${colors.background.lighter};
      border-color: ${colors.primary.darker};
      &:hover {
        background-color: ${colors.primary.darker};
      }
    `};

  ${(props) =>
    props.theme === "secondary" &&
    css`
      background-color: ${colors.secondary.neutral};
      border-color: ${colors.secondary.darker};
      color: ${colors.background.lighter};
      &:hover {
        background-color: ${colors.secondary.darker};
      }
    `};

  ${(props) =>
    props.theme === "tertiary" &&
    css`
      border-color: ${colors.text.darker};
      color: ${colors.text.darker};
    `};

  ${(props) =>
    props.disabled === true &&
    css`
      background-color: ${colors.disabled.neutral};
      color: ${colors.text};
      &:hover {
        background-color: ${colors.disabled.darker};
      }
    `};
`;
