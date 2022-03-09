import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > strong {
    font-size: 16px;
    color: #f5fffa;
    font-weight: 400;
    background-color: #2f4f4f;
    width: 280px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  > span {
    font-size: 16px;
    color: #f5fffa;
    font-weight: 400;
    background-color: #4682b4;
    width: 280px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
`;

export const ContainerTransactions = styled.div`
  width: 280px;
  height: 250px;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #c9d7e8;
  > h2 {
    text-align: center;
  }
`;

export const BoxNoMove = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`;
