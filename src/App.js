import { Switch, Route } from 'react-router-dom';
import './default.scss';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
          <Route path="/login" render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
      </Switch>
    </div>
  );
}

export default App;
