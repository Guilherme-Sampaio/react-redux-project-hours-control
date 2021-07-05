import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "../../commom/Container";
import { Button } from "../../commom/Button";
import { Form } from "./styled";
import { useSelector } from "react-redux";
import ProjectService from "../../services/project.service";
import requestService from "../../services/request.service";
import { useHistory } from "react-router-dom";
import AppointmentService from "../../services/appointment.service";

function Appointment() {
  const { register, getValues } = useForm();
  const [projects, setProjects] = useState([{}]);
  const userState = useSelector((state) => state.userState);
  const router = useHistory();

  useEffect(() => {
    console.log(userState);
    if (!userState.isLogged) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    ProjectService.getProjectsByUserId(userState.user.id).then(async (data) => {
      if (data.status === requestService.STATUS_OK) {
        setProjects(await data.json());
      }
    });
  }, []);

  const createAppointment = () => {
    const data = getValues();
    const appointment = {
      finishDate: data.finishDate,
      startDate: data.startDate,
      project: { id: data.project ? data.project : projects[0].id },
      user: { id: userState.user.id },
    };
    AppointmentService.create(appointment).then((data) =>{
      console.log("data:", data)
    }).catch((error) => {
      console.log("error: ", error)
    });
  };

  return (
    <Container>
      <div>
        <Form></Form>
        <Form>
          <form>
            <p>Apontamentos</p>
            <label htmlFor="project ">Projeto</label>
            <select {...register("project")}>
              {projects &&
                projects.map((project, key) => (
                  <option key={key} value={project.id}>
                    {project.name}
                  </option>
                ))}
            </select>
            <label htmlFor="startDate ">Horário inicial</label>
            <input {...register("startDate")} type="datetime-local" />
            <label htmlFor="finishDate ">Horário final</label>
            <input {...register("finishDate")} type="datetime-local" />
            <Button onClick={createAppointment}>Finalizar apontamento</Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default Appointment;
