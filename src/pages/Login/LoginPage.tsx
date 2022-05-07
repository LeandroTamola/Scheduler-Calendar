import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormTextInput } from "../../components/Form";
import { ErrorMessage } from "../../components/Form/styles";
import { Button } from "../../components/ui/Button";
import { Title } from "../../components/ui/Text";
import { signIn } from "../../redux/auth/events";

import {
  currentUserSelector,
  signInResponseSelector,
} from "../../redux/auth/selectors";
import { FORM_FIELDS, LoginFormData, validationSchema } from "./constants";
import {
  BodyContainer,
  ButtonsContainer,
  Container,
  inlineStyles,
  StyledForm,
} from "./styles";

const LoginPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const { isLoading, error } = useSelector(signInResponseSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser]);

  const handleSubmit = async (formData: LoginFormData) => {
    const { username, password } = formData;
    dispatch(signIn({ username, password }));
  };

  return (
    <Container>
      <BodyContainer>
        <StyledForm onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Title style={inlineStyles.title}>The Calendar</Title>
          <FormTextInput
            label="Username"
            name={FORM_FIELDS.USERNAME}
            style={inlineStyles.inputField}
          />
          <FormTextInput
            label="Password"
            name={FORM_FIELDS.PASSWORD}
            type="password"
            style={inlineStyles.inputField}
          />
          {!!error && (
            <ErrorMessage style={inlineStyles.errorMessage}>
              {error.message}
            </ErrorMessage>
          )}
          <ButtonsContainer>
            <Button
              isLoading={isLoading}
              type="submit"
              style={inlineStyles.button}
            >
              Login
            </Button>
          </ButtonsContainer>
        </StyledForm>
      </BodyContainer>
    </Container>
  );
};

export { LoginPage };
