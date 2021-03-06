import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styled';
import { USER_TYPE } from '../../types/userType';
import { SLIDEBAR_MENU } from '../../types/slidebarType';

function Sidebar() {
  const slidebarMenu = useSelector((state) => state.slidebarMenu.isVisible);
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const router = useHistory();
  const isAdmin = userState.user.roles
    ? userState.user.roles.includes('ROLE_ADMIN')
    : false;

  function logout() {
    sessionStorage.removeItem('user');
    dispatch({
      type: USER_TYPE,
      user: {},
      isLogged: false,
    });
    dispatch({
      type: SLIDEBAR_MENU,
      isVisible: false,
    });
    router.push('/login');
  }

  return (
    <Container isVisible={slidebarMenu}>
      <nav>
        <p>
          <span>Control App</span>
        </p>
        <Link to="/">Página inicial</Link>
        {!isAdmin && <Link to="/appointment">Apontamentos</Link>}
        <Link to="/project">Projeto</Link>
        <Link onClick={logout}>Logout</Link>
      </nav>
    </Container>
  );
}

export default Sidebar;
