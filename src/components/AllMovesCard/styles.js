import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f8f8ff;
  text-align: left;
  width: 250px;
  margin: 10px;
  border: 2px solid #121254;
  justify-content: space-between;
  align-items: center;
  > span {
    margin-left: 10px;
    color: #737373;
  }
  > section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
  > div {
    display: flex;
  }

  button {
    border: none;
    margin-right: 10px;
    svg {
      width: 22px;
      height: 16px;
    }
  }
`;
