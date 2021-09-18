import { Switch, Route } from 'react-router-dom';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

//layouts
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
