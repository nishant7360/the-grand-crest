import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 480px) {
    padding: 2.4rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    gap: 2.4rem;
  }
`;

export default DashboardBox;
