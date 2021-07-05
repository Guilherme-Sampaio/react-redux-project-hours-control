import styled from 'styled-components';

export const Form = styled.div`
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form p {
    align-self: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  form > * {
    display: inline-block;
    width: 200px;
  }

  label {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    margin-left: 25%;
    color: black;
    align-self: flex-start;
  }

  select {
    background-color: rgb(255, 255, 255);
  }

  input,
  select {
    border: 1px solid black !important;
    width: 50%;
    height: 2rem;
    border: 0;
  }

  input,
  select {
    padding: 5px 0;
    border-radius: 2px;
  }

  Button {
    width: 50%;
    height: 2rem;
    margin-top: 1.5rem;
  }
`;
