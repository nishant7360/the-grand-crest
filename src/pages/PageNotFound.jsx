import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
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
    margin-bottom: 2.4rem;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.4;
  }

  @media (min-width: 480px) {
    padding: 4.8rem;

    & h1 {
      margin-bottom: 3.2rem;
    }
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
