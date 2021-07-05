import styled from 'styled-components';

export const Container = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url('https://everydayfeminism.com/wp-content/uploads/2015/11/iStock_000075210281_Medium.jpg');
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica;
  letter-spacing: 0.02em;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  opacity: 0.85;

  div {
    position: relative;
    width: 250px;
    height: 350px;
    top: calc(50% - 175px);
    left: calc(50% - 125px);
    background: inherit;
    border-radius: 2px;
    overflow: hidden;
  }

  div:after {
    content: '';
    width: 300px;
    height: 350px;
    background: inherit;
    position: absolute;
    left: -25px;
    right: 0;
    top: -25px;
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.1);
    filter: blur(10px);
  }

  form {
    position: relative;
    padding: 10px;
    text-align: center;
    z-index: 1;
  }

  form > * {
    display: inline-block;
    width: 200px;
  }

  span {
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: 50%;
    background-size: contain;
    background-image: url('https://cdn2.iconfinder.com/data/icons/basic-ui-84/32/User-512.png');
  }

  label {
    margin-top: 15px;
    margin-bottom: 10px;
    color: black;
  }

  input {
    width: 80%;
    height: 1.2rem;
    opacity: 0.4;
    color: black;
    border-radius: 2px;
    padding: 5px 15px;
    border: 0;
  }

  Button {
    margin-top: 1.5rem;
    width: 93%;
    height: 1.8rem;
    opacity: 0.4;
  }
`;
