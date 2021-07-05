import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "./styled";
import { Button } from "../../commom/Button";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "../../types/userType";
import authService from "../../services/auth.service";
import requestService from "../../services/request.service";
import { useHistory } from "react-router-dom";
import { SLIDEBAR_MENU } from "../../types/slidebarType";

function LoginPage() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const router = useHistory();

  const login = (data) => {
    authService
      .login(getValues())
      .then(async (data) => {
        if (data.status === requestService.STATUS_OK) {
          const user = await data.json();
          sessionStorage.setItem("user", JSON.stringify(user));
          await dispatch({
            type: USER_TYPE,
            user: user,
            isLogged: true,
          });
          await dispatch({
            type: SLIDEBAR_MENU,
            isVisible: true,
          });
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(login)}>
          <span></span>
          <label>Login</label>
          <input {...register("username")} type="text" />
          <label>Senha</label>
          <input {...register("password")} type="password" />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;
