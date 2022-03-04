import styled from "styled-components";

export const ContainerEntrance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1cb01c;
  width: 280px;
  heigth: 250px;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > span {
    color: #4d6619;
    font-size: 16px;
    margin-top: 10px;
  }
`;
