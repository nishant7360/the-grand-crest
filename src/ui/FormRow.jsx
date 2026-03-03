import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    &:has(button) {
      display: flex;
      flex-direction: row;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.3rem;

  @media (min-width: 768px) {
    font-size: inherit;
  }
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-700);

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
