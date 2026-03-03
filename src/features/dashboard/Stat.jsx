import styled from "styled-components";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);

  padding: 1.2rem 1.4rem;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1rem;
  row-gap: 0.2rem;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 480px) {
    padding: 1.4rem 1.6rem;
    grid-template-columns: 4.8rem 1fr;
    column-gap: 1.2rem;
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  @media (min-width: 480px) {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 1.2rem;

    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Title = styled.h5`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--color-grey-500);
  align-self: end;
`;

const Value = styled.p`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-grey-900);
  align-self: start;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
