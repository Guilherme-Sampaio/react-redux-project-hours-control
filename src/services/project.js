import { get } from './http-request';

export const getProjectsByUserId = (id) => {
  return get(`/projects/user/${id}`);
};

export const getAllProjects = () => {
  return get('/projects');
};
