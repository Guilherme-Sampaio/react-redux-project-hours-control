import styled from "styled-components";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url("https://www.bwg.com.br/wp-content/uploads/2020/06/4_comunicacao-em-equipe-1.jpg");
  opacity: 0.55;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 100%;
  }

  div:nth-child(1) {
    margin-left: 11%;
  }

  div:nth-child(2) {
    background: rgba(86, 86, 86, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: bold;
  }

  img {
    width: 50%;
    padding: 5% 0;
  }

`;
