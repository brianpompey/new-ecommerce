import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './default.scss';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';


class App extends Component {

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
    });
  }
/*
  componentWillUnmount() {
    this.authListener();
  }
*/
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout >
                <Homepage />
              </HomepageLayout>
            )} />
            <Route path="/registration" render={() => (
              <MainLayout >
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
                <MainLayout >
                  <Login />
                </MainLayout>
              )} 
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
