import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 0.8rem 0;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    align-items: center;
    gap: 1.6rem;
    flex-wrap: nowrap;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  min-width: 0;
  flex-shrink: 0;

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-brand-600);
    flex-shrink: 0;

    @media (min-width: 480px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
