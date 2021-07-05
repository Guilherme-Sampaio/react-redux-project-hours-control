import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  height: 100vh;
  width: 250px;
  z-index: 999;
  background-color: #111;
  overflow-x: hidden;

  a:last-child {
    position: absolute;
    bottom: 0px;
    padding-left: 16px;
  }

  nav {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  a,
  p {
    width: 250px;
    height: 2rem;
    padding: 8px 16px;
    padding-top: 16px;
    border-bottom: rgb(22, 22, 22) 2px solid;
    text-decoration: none;
    font-size: 1.2rem;
    color: #818181;
  }

  a:hover {
    color: #f1f1f1;
    background-color: rgb(22, 22, 22);
  }

  p {
    background-color: #222;
  }
`;
