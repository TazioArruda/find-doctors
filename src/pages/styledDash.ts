import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const CHeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  align-items: center;
  padding: 1rem;

  span {
    /* display: flex; */
    justify-content: start;
    /* align-items: end; */
    border: none;
    gap: 1rem;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.3rem;
  }
`;
export const ListHeader = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  align-items: center;
  padding: 1rem;
  background-color: white;
`;
