import React from 'react';
import logo from './logo.svg';
import { } from 'mobx';
import { observer } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme, Theme, ThemeOptions } from '@material-ui/core';
import { } from 'axios';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers/Helpers';
import CustomAlert from './components/CustomAlert';
import { StoreHolder } from './store/StoreHolder';
import { ThemeType } from "./store/ThemeStore";
import { PrivateRoute, SettingsPage, DashboardPage, LoginPage, UsersPage } from './components';
import { indigo, deepPurple } from '@material-ui/core/colors';

@observer
class App extends React.Component {

  public App() {
    history.listen(() => {

    });
  }

  private getLocalTheme(): ThemeType {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light")
        return "light";
      else
        return "dark";
    }
    return "light";
  }

  componentDidMount() {
    setTimeout(() => document.body.style.cssText = 'transition: ease-in-out background-color 0.2s !important;', 1000);
  }

  render() {
    let localTheme: ThemeType = this.getLocalTheme();
    let themeType: ThemeType = StoreHolder.themeStore.getType !== localTheme ? localTheme : StoreHolder.themeStore.getType;
    let theme: ThemeOptions = {
      palette: {
        primary: deepPurple,
        secondary: deepPurple,
        type: themeType
      }
    }
    let muiTheme: Theme = createMuiTheme(theme);
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CustomAlert></CustomAlert>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/settings" component={SettingsPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
            <PrivateRoute exact path="/users" component={UsersPage} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
