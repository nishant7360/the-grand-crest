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
  gap: 16px;
  flex-direction: column;
`;

function LoginForm() {
  const [email, setEmail] = useState("nishant@test.com");
  const [password, setPassword] = useState("pass1234");
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
        <label>Email Address</label>
        <Row label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </Row>
        <label>Password</label>
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
        <Row>
          <Button size="large" disabled={isLoggingIn}>
            {!isLoggingIn ? "Login" : <SpinnerMini />}
          </Button>
        </Row>
      </StyledLoginForm>
    </Form>
  );
}

export default LoginForm;
