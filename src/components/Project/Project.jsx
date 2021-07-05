import React, { useEffect } from "react";
import { Container } from "../../commom/Container";
import { Button } from "../../commom/Button";
import { Table } from "./styled";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Project() {
  const userState = useSelector((state) => state.userState);
  const router = useHistory();

  useEffect(() => {
    if (!userState.isLogged) {
      router.push("/login");
    }
  }, []);

  return (
    <Container>
      <div>
        <Table>
          <header>
            <select>
              <option value="perUser">Por programador</option>
              <option value="perProject">Por projeto</option>
              <option value="total">Total</option>
            </select>
            <select>
              <option value="perUser">Programador 1</option>
              <option value="perProject">Programador 2</option>
            </select>
            <Button>Atualizar lista</Button>
          </header>
          <table>
            <tr>
              <th>Projeto</th>
              <th>Desenvolvedor</th>
              <th>Total de horas</th>
            </tr>
            <tr>
              <td>Projeto A</td>
              <td>Programador 1</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Projeto A</td>
              <td>Programador 2</td>
              <td>13.3</td>
            </tr>
            <tr>
              <td>Projeto b</td>
              <td>Programador 1</td>
              <td>80.5</td>
            </tr>
          </table>
        </Table>
        <Table></Table>
      </div>
    </Container>
  );
}

export default Project;
