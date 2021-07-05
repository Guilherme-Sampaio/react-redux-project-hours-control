import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../commom/Container';
import { Button } from '../../commom/Button';
import { Form } from './styled';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProjectsByUserId } from '../../services/project';
import { createAppointment } from '../../services/appointment';
import { getFormatedDb, getMementString } from '../../services/time';

function Appointment() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [projects, setProjects] = useState([]);
  const userState = useSelector((state) => state.userState);
  const router = useHistory();

  useEffect(() => {
    if (!userState.isLogged) {
      router.push('/login');
    }
  }, []);

  useEffect(async () => {
    const data = await getProjectsByUserId(userState.user.id);
    setProjects(data);
    setValue('startDate', getMementString(0));
    setValue('finishDate', getMementString(2));
  }, []);

  const onCreateAppointment = async () => {
    const data = getValues();
    const appointment = {
      finishDate: getFormatedDb(data.finishDate),
      startDate: getFormatedDb(data.startDate),
      project: { id: data.project ? data.project : projects[0].id },
      user: { id: userState.user.id },
    };
    await createAppointment(appointment);
    alert('Apontamento realizado com sucesso!');
  };

  return (
    <Container>
      <div>
        <Form>
          <form onSubmit={handleSubmit(onCreateAppointment)}>
            <p>Apontamentos</p>
            <label htmlFor="project ">Projeto</label>
            <select {...register('project')}>
              {projects &&
                projects.map((project, key) => (
                  <option key={key} value={project.id}>
                    {project.name}
                  </option>
                ))}
            </select>
            <label htmlFor="startDate ">Horário inicial</label>
            <input required {...register('startDate')} type="datetime-local" />
            <label htmlFor="finishDate ">Horário final</label>
            <input required {...register('finishDate')} type="datetime-local" />
            <Button>Finalizar apontamento</Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default Appointment;
