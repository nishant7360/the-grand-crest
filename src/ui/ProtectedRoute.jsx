import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* Prevent layout shift on mobile when browser UI appears/disappears */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1.Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //3. If there is not authenticated user redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate],
  );

  //2.While loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 if user is authenticated then render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
