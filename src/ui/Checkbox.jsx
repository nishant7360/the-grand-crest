import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;

  @media (min-width: 480px) {
    gap: 1.6rem;
    align-items: center;
  }

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    min-width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
    margin-top: 0.2rem;

    @media (min-width: 480px) {
      margin-top: 0;
    }
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.5;
    font-size: 1.3rem;

    @media (min-width: 480px) {
      font-size: inherit;
    }
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
