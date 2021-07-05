import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import Sidebar from "../Sidebar/Sidebar";
import Homepage from "../Homepage/Homepage";
import Appointment from "../Appointment/Appointment";
import Project from "../Project/Project";
import { AppRoot } from "../../commom/AppRoot";

function App() {
  const appPages = () => {
    return (
      <AppRoot>
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
      </AppRoot>
    );
  };

  return <Router>{appPages()}</Router>;
}

export default App;
