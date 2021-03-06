import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './default.scss';
//import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import SmokerDirectory from './pages/SmokerDirectory';
import RecipeDirectory from './pages/RecipeDirectory';
import Cart from './components/Cart';
import SmokerPage from './components/SmokerPage';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import { ChakraProvider } from "@chakra-ui/react";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";


class App extends Component {

  authListener = null;
/*
  componentDidMount() {
    const { setCurrentUser } = this.props;

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

      setCurrentUser(userAuth);
    });
  }

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
            <Route path="/grills" render={() => (
                <MainLayout>
                  <SmokerPage/>
                </MainLayout>
              )} 
            />
            <Route path="/cart" render={() => (
                <MainLayout>
                  <Cart />
                </MainLayout>
              )} 
            />
            <Route path="/recipes" render={() => (
                <MainLayout >
                  <ThemeProvider theme={theme}>
                    <RecipeDirectory />
                  </ThemeProvider>
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


/*
                  <ChakraProvider >
                    <SmokerDirectory />
                  </ChakraProvider>
                  */