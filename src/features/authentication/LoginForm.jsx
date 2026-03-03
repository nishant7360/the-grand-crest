import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import styled from "styled-components";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLoginForm = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  width: 100%;

  @media (min-width: 480px) {
    gap: 2rem;
  }
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-grey-700);
  margin-bottom: -0.8rem;

  @media (min-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ButtonRow = styled(Row)`
  margin-top: 0.8rem;

  & button {
    width: 100%;

    @media (min-width: 480px) {
      width: auto;
      min-width: 14rem;
      align-self: flex-end;
    }
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLoginForm>
        <StyledLabel>Email Address</StyledLabel>
        <Row label="Email address">
          <Input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </Row>

        <StyledLabel>Password</StyledLabel>
        <Row label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoggingIn}
          />
        </Row>

        <ButtonRow>
          <Button size="large" disabled={isLoggingIn}>
            {!isLoggingIn ? "Login" : <SpinnerMini />}
          </Button>
        </ButtonRow>
      </StyledLoginForm>
    </Form>
  );
}

export default LoginForm;
