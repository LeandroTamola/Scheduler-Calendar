import { FC } from "react";
import { createPortal } from "react-dom";

import { Button } from "../ui/Button";
import { Title } from "../ui/Text";
import {
  Container,
  TitleContainer,
  BodyContainer,
  inlineStyles,
} from "./styles";

interface Props {
  open: boolean;
  closeModal: () => void;
  title?: string;
}

const Modal: FC<Props> = ({ open, closeModal, title, children }) => {
  if (!open) return;

  return createPortal(
    <Container onClick={closeModal}>
      <BodyContainer onClick={(e) => e.stopPropagation()}>
        <TitleContainer>
          <Title>{title}</Title>
          <Button
            type="button"
            theme="tertiary"
            onClick={closeModal}
            style={inlineStyles.button}
          >
            X
          </Button>
        </TitleContainer>
        {children}
      </BodyContainer>
    </Container>,
    document.querySelector("#portal")
  );
};

export { Modal };
