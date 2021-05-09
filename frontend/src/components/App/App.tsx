import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BloodPressure from '../../pages/BloodPressure/BloodPressure';
import CreateBloodPressure from '../../pages/BloodPressure/create/CreateBloodPressure';
import Home from '../../pages/Home/Home';
import CreateKidneyDisease from '../../pages/KidneyDisease/create/CreateKidneyDisease';
import KidneyDisease from '../../pages/KidneyDisease/KidneyDisease';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blood-pressure' component={BloodPressure} />
          <Route
            exact
            path='/create/blood-pressure'
            component={CreateBloodPressure}
          />
          <Route exact path='/kidney-disease' component={KidneyDisease} />
          <Route
            exact
            path='/create/kidney-disease'
            component={CreateKidneyDisease}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
