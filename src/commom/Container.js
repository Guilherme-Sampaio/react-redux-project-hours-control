import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url("https://www.bwg.com.br/wp-content/uploads/2020/06/4_comunicacao-em-equipe-1.jpg");
  opacity: 0.55;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: 1rem;
    margin-left: 12%;
    margin-right: 1%;
    margin-top: 1%;
    height: 50%;
    padding: 10px;
    background-color: rgba(245, 245, 245, 0.9);
  }

  div div {
    width: 95%;
    height: 90%;
    margin: 1rem;
    justify-items: center;
  }
`;