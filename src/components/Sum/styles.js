import styled from "styled-components";

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  color: #f5fffa;
  font-size: 16px;
  background-color: #000080;
  align-items: left;
  > span {
    margin: 10px 10px;
  }
`;

export const BoxTransactions = styled.section`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 50px;
  align-items: center;
  background-color: #000080;
  color: #f5fffa;
  justify-content: space-around;
  font-size: 14px;
  border-top: 1.11px solid #f5fffa;
  > span {
    position: relative;
    right: 12px;
  }
`;
