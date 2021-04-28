import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./views/Home";
import Dash from "./views/Dash";
import AddRecording from "./views/AddRecording";
import PrivateRoute from "./components/PrivateRoute";
import { ContextProvider } from "./context";
import "tippy.js/dist/tippy.css";
import { API } from "./config";
function App() {
  fetch(`${API}`);
  return (
    <ContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <NavbarComponent />
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Dash} />
          <PrivateRoute path="/dashboard/add" exact component={AddRecording} />

          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
