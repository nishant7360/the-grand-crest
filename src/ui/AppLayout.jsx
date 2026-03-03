import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import React from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  @media (min-width: 768px) {
    grid-template-columns: 26rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2.4rem 1.6rem 4rem;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 480px) {
    padding: 3.2rem 2.4rem 4.8rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 3.2rem;
  }
`;

const SidebarOverlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  backdrop-filter: blur(1px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LayoutContext = React.createContext();

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <StyledAppLayout>
        <Header />
        <SidebarOverlay
          $isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(false)}
        />
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </LayoutContext.Provider>
  );
}

export default AppLayout;
