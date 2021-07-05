import React, { useEffect, useState } from "react";
import { Container } from "../../commom/Container";
import { Table } from "./styled";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProjects, getProjectsByUserId } from "../../services/project";
import {
  getAllTimeDifference,
  getFormatedTime,
  getTimeDifference,
} from "../../services/time";

function Project() {
  const userState = useSelector((state) => state.userState);
  const router = useHistory();
  const [projects, setProjects] = useState([]);
  const isAdmin = userState.user
    ? userState.user.roles.includes("ROLE_ADMIN")
    : false;
  const isDev = userState.user
    ? userState.user.roles.includes("ROLE_DEV")
    : false;

  useEffect(async () => {
    if (!userState.isLogged) {
      router.push("/login");
    }
    getProject();
  }, []);

  const getProject = async () => {
    if (isDev) {
      const data = await getProjectsByUserId(userState.user.id);
      setProjects(data);
    }

    if (isAdmin) {
      const data = await getAllProjects();
      setProjects(data);
    }
  };

  const filterAppointments = (appointmentList) => {
    if (isDev) {
      return appointmentList
        ? appointmentList.filter(
            (appointmentList) => appointmentList.user.id === userState.user.id
          )
        : appointmentList;
    }

    return appointmentList.sort((A, B) => {
      if (A.user.username > B.user.username) return 1;
      if (A.user.username < B.user.username) return -1;
      return 0;
    });
  };

  const renderAppointments = (appointmentList) => {
    const appointments = filterAppointments(appointmentList);
    return (
      appointments &&
      appointments.map((appointment) => (
        <tr>
          <td>{appointment.id}</td>
          <td>{appointment.user.username}</td>
          <td>{getFormatedTime(appointment.startDate)}</td>
          <td>{getFormatedTime(appointment.finishDate)}</td>
          <td>
            {getTimeDifference(appointment.startDate, appointment.finishDate)}
          </td>
        </tr>
      ))
    );
  };

  const renderProjects = () => {
    return (
      projects &&
      projects.map((project) => (
        <>
          <h1>{project.name}</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Desenvolvedor</th>
              <th>Hora inícial</th>
              <th>Hora final</th>
              <th>Tempo trabalhado</th>
            </tr>
            {renderAppointments(project.appointments)}
            <tr>
              <td>Total:</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {getAllTimeDifference(
                  project.appointments,
                  userState.user.id,
                  isAdmin
                )}
              </td>
            </tr>
          </table>
        </>
      ))
    );
  };

  return (
    <Container>
      <Table>{renderProjects()}</Table>
    </Container>
  );
}

export default Project;
