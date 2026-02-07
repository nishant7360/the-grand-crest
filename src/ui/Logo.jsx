import styled from "styled-components";
import { useDarkMode } from "../Context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      {isDarkMode ? (
        <Img src="/new-logo.png" alt="Logo" />
      ) : (
        <Img src="/new-logo.png" alt="Logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
