import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: #fffaf0;
  button {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 0 auto;
  }
`;

export const FormContainer = styled.form`
  margin-top: 50px;
  align-items: flex-start;
  background-color: #5f9ea0;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 40px 30px;
  button {
    margin-top: 8px;
  }
  div + div {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  @media (min-width: 1200px) {
    margin-top: 13vh;
  }
`;

export const ContainerMovement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 140px;
  }
`;

export const AllMovements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media (min-width: 1200px) {
    margin-top: 13vh;
  }
`;

export const FilterMovements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
