import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "../../commom/Container";
import { SLIDEBAR_MENU } from "../../types/slidebarType";
import { Home } from './styled'

function Homepage() {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.slidebarMenu.isVisible);
  const userState = useSelector((state) => state.userState);
  const router = useHistory();

  useEffect(() => {
    if (!userState.isLogged) {
      router.push("/login");
    }
  }, []);

  const openMenu = () => {
    dispatch({
      type: SLIDEBAR_MENU,
      isVisible: !isMenuVisible,
    });
  };

  return (
    <Container>
      <Home>
        <div>
          <img
            onClick={openMenu}
            src="https://image.flaticon.com/icons/png/512/2913/2913185.png"
            alt="perfil image"
          />
          <h1>Seja bem vindo {userState.user.username}!</h1>
        </div>
      </Home>
    </Container>
  );
}

export default Homepage;
