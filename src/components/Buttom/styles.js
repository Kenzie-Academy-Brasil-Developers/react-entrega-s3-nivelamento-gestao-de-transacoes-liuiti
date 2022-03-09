import styled from "styled-components";

export const ButtomContainer = styled.button`
  background: ${(props) => props.backgroundColor};
  color: black;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  border-radius: 15px;
  border: 2px solid ${(props) => props.backgroundColor};
  width: 220px;

  :hover {
    border: 2px solid ${(props) => props.hoverColor};
    background: ${(props) => props.hoverColor};
  }
`;
