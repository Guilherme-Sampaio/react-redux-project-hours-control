import { get, post } from "./http-request";

export const createAppointment = async (appointment) => {
  return post("/appointments", appointment);
};

export const getAppointmentsByUser = (id) => {
  return get(`/appointments/user/${id}`);
};

export const getAllAppointments = (_) => {
  return get("/appointments");
};
