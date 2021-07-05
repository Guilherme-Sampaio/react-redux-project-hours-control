import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppointmentService from "../../services/appointment.service";
import { SLIDEBAR_MENU } from "../../types/slidebarType";
import { Home } from "./styled";

function Homepage() {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(state => state.slidebarMenu.isVisible);
  const userState = useSelector(state => state.userState);
  const router = useHistory();

  useEffect(() => {
    if (!userState.isLogged) {
      router.push("/login");
    }
  },[])

  const openMenu = () => {
    dispatch({
      type: SLIDEBAR_MENU,
      isVisible: !isMenuVisible,
    });
  };

  const testAppointments = () => {
    AppointmentService.getAllAppointments();
  }

  return (
    <Home>
      <div></div>
      <div>
        <img
          onClick={openMenu}
          src="https://image.flaticon.com/icons/png/512/2913/2913185.png"
          alt="perfil image"
        />
        <h1  onClick={testAppointments}>Seja bem vindo {userState.user.username}!</h1>
      </div>
    </Home>
  );
}

export default Homepage;
