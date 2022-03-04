import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
  label {
    color: bisque;
  }
  > div > span {
    color: #b33000;
    font-size: 10px;
  }
`;

export const InputValidation = styled.div`
  background: white;
  border-radius: 4px;
  padding: 8px 5px;
  width: 100%;
  border: 1.5px solid white;
  :focus-within {
    border: 1.11px solid #666360;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}
  input {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: #312e38;
    &::placeholder {
      color: #666360;
    }
  }
`;
