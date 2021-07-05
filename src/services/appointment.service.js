import requestService from "./request.service";

class AppointmentServiceProvider {
  create = (appointment) => {
    return requestService.post("/appointments", appointment);
  };

  getAppointmentsByUser = (id) => {
    return requestService.get(`/appointments/user/${id}`);
  };

  getAllAppointments = (_) => {
    return requestService.get("/appointments");
  };
}

const AppointmentService = new AppointmentServiceProvider();

export default AppointmentService;
