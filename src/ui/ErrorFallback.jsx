import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 1.6rem;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  @media (min-width: 480px) {
    padding: 4.8rem 2.4rem;
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem 2.4rem;
  flex: 0 1 96rem;
  width: 100%;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
    font-size: clamp(1.8rem, 4vw, 3rem);
  }

  & p {
    font-family: "Sono";
    margin-bottom: 2.4rem;
    color: var(--color-grey-500);
    font-size: clamp(1.3rem, 2vw, 1.6rem);
    word-break: break-word;
  }

  @media (min-width: 480px) {
    padding: 4.8rem;

    & p {
      margin-bottom: 3.2rem;
    }
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledErrorFallback>
      <Box>
        <Heading as="h1">Something went wrong</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </Box>
    </StyledErrorFallback>
  );
}

export default ErrorFallback;
