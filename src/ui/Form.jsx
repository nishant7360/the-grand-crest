import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2rem 2.4rem;

      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (min-width: 480px) {
        padding: 2.4rem 3.2rem;
      }

      @media (min-width: 768px) {
        padding: 2.4rem 4rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: min(80rem, 95vw);
    `}

  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
