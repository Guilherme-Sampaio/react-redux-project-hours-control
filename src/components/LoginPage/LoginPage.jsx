import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styled';
import { Button } from '../../commom/Button';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from '../../types/userType';
import { login } from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import { SLIDEBAR_MENU } from '../../types/slidebarType';

function LoginPage() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const router = useHistory();

  useEffect(() => {
    dispatch({
      type: SLIDEBAR_MENU,
      isVisible: false,
    });
  }, []);

  const onLogin = async () => {
    const user = login(getValues());
    user
      .then((data) => {
        sessionStorage.setItem('user', JSON.stringify(data.data));
        dispatch({
          type: USER_TYPE,
          user: data.data,
          isLogged: true,
        });
        dispatch({
          type: SLIDEBAR_MENU,
          isVisible: true,
        });
        router.push('/');
        setTimeout(() => {
          window.location.reload();
        }, 250);
      })
      .catch(() => {
        alert('Erro ao efetuar login!');
      });
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(onLogin)}>
          <span></span>
          <label>Login</label>
          <input required {...register('username')} type="text" />
          <label>Senha</label>
          <input required {...register('password')} type="password" />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;
