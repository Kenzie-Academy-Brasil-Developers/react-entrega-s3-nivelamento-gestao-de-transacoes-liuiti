import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #2f4f4f;
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  > span {
    font-weight: 500;
    @media (min-width: 800px) {
      margin-left: 10vh;
    }
    @media (min-width: 1024px) {
      margin-left: 48vh;
    }
  }

  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;
