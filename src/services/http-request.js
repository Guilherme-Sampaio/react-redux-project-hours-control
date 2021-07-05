import store from '../store';
import axios from 'axios';

const urlCore = 'http://localhost:8080';
const userState = store.getState().userState;

export const get = async (url) => {
  const response = await axios.get(urlCore + url, {
    headers: {
      Authorization: userState.isLogged
        ? userState.user.type + ' ' + userState.user.accessToken
        : null,
      'Content-Type': 'application/json',
    },
  });
  return await response.data;
};

export const post = async (url, data, isGetJson = true) => {
  const response = await axios.post(urlCore + url, await JSON.stringify(data), {
    headers: {
      Authorization: userState.isLogged
        ? userState.user.type + ' ' + userState.user.accessToken
        : null,
      'Content-Type': 'application/json',
    },
  });
  return isGetJson ? await response.data : await response;
};
