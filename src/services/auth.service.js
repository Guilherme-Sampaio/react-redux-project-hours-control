import { post } from './http-request';

export const login = (user) => {
  return post("/auth/signin", user, false);
};
