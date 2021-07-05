import styled from "styled-components";

export const Table = styled.div`
  height: 100%;

  :nth-child(2) {
    background: url("https://cdn2.iconfinder.com/data/icons/work-from-home-30/64/29-working-512.png")
      no-repeat center;
    background-size: contain;
    justify-self: end;
  }

  :nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  h1 {
    padding-top: 25px;
    padding-bottom: 8px;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  select {
    background-color: rgb(255, 255, 255);
    border: 1px solid black !important; 
    width: 20%;
    height: 1.8rem;
    border: 0;
    padding: 5px 0;
    border-radius: 2px;
  }

  Button {
    width: 20%;
    height: 1.8rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 0.5rem;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    text-align: left;
    background-color: #111111;
    color: white;
  }
`;
