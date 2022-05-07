import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
}
const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  theme = "primary",
  onClick,
  disabled,
  style,
  isLoading,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      theme={theme}
      style={style}
    >
      {isLoading ? <span>Loading...</span> : children}
    </StyledButton>
  );
};

export { Button };
