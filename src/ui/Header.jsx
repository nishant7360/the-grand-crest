import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: end;

  @media (min-width: 480px) {
    padding: 1.2rem 3.2rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 1.2rem 4.8rem;
    gap: 2.4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
