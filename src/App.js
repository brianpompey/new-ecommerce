import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './default.scss';
import { auth } from './firebase/utils';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

const initialState = {
  currentUser: null
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState({
          ...initialState
        });
      };

      this.setState({
        currentUser: userAuth
      });
    });
  }
/*
  componentWillUnmount() {
    this.authListener();
  }
*/
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Homepage />
              </HomepageLayout>
            )} />
            <Route path="/registration" render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )} 
            />
        </Switch>
      </div>
    );
  }
}

export default App;
