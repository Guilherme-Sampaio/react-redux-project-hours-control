import styled from "styled-components";

export const Container = styled.div`
  display: ${ ({isVisible}) => isVisible ? 'block' : 'none'};
  height: 100%;
  width: 11%;
  position: fixed;
  z-index: 1;
  background-color: #111;
  overflow-x: hidden;

  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  a,
  p {
    width: 100%;
    height: 2rem;
    padding: 0.5rem 1rem;
    border-bottom: rgb(22, 22, 22) 2px solid;
    text-decoration: none;
    font-size: 1.2rem;
    color: #818181;
  }

  a:nth-child(1) {
    padding-top: 1.5rem;
    background-color: #222;
  }

  a:nth-child(5) {
    border-bottom: 0px;
    margin-top: 78vh;
  }

  a:hover {
    color: #f1f1f1;
    background-color: rgb(22, 22, 22);
  }

  p {
    background-color: #222;
    padding-top: 1rem;
  }

  p > span {
    margin-left: 2rem;
  }

  img {
    width: 1.2rem;
    padding-right: 1rem;
  }
`;
