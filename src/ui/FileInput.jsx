import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.3rem;
  border-radius: var(--border-radius-sm);
  width: 100%;

  @media (min-width: 480px) {
    font-size: 1.4rem;
    width: auto;
  }

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.7rem 1rem;
    margin-right: 1rem;
    margin-bottom: 0.4rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;
    min-height: 4.4rem;

    @media (min-width: 480px) {
      padding: 0.8rem 1.2rem;
      margin-right: 1.2rem;
      margin-bottom: 0;
      min-height: unset;
    }

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
