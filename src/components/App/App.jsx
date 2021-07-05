import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import Sidebar from "../Sidebar/Sidebar";
import Homepage from "../Homepage/Homepage";
import Appointment from "../Appointment/Appointment";
import Project from "../Project/Project";

function App() {
  const appPages = () => {
    return (
      <>
        <Sidebar />
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </>
    );
  };

  return <Router>{appPages()}</Router>;
}

export default App;
