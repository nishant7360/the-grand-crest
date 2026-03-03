import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  gap: 2.4rem;
  background-color: var(--color-grey-50);
  padding: 2.4rem 1.6rem;

  /* Tablet */
  @media (min-width: 480px) {
    gap: 3.2rem;
    padding: 3.2rem 2.4rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  /* Ensure heading and form stretch to full wrapper width */
  & > * {
    width: 100%;
  }

  @media (min-width: 480px) {
    gap: 3.2rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <ContentWrapper>
        <Logo />
        <Heading as="h4">Login to your account</Heading>
        <LoginForm />
      </ContentWrapper>
    </LoginLayout>
  );
}

export default Login;
