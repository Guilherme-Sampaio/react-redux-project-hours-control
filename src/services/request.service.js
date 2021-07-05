import store from "../store";

const urlCore = "http://localhost:8080";
const STATUS_OK = 200;
const userState = store.getState().userState;

const get = (url) => {
  console.log("GET", url, userState);
  return fetch(urlCore + url, {
    method: "GET",
    headers: {
      Authorization: userState.isLogged
        ? userState.user.type + " " + userState.user.accessToken
        : null,
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};

const post = (url, data) => {
  console.log("POST", url, data, userState);
  return fetch(urlCore + url, {
    method: "POST",
    headers: {
      Authorization: userState.isLogged
        ? userState.user.type + " " + userState.user.accessToken
        : null,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  });
};

const requestService = {
  get,
  post,
  STATUS_OK,
};

export default requestService;
