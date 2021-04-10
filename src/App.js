import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './views/Signup';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
