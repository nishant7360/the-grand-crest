import styled from "styled-components";
import { useDarkMode } from "../Context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 7.2rem;
  width: auto;

  @media (min-width: 768px) {
    height: 9.6rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLogo>
      <Img src="/new-logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
