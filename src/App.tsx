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
import { PrivateRoute, SettingsPage, DashboardPage, LoginPage } from './components';

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

  render() {
    let localTheme: ThemeType = this.getLocalTheme();
    let themeType: ThemeType = StoreHolder.themeStore.getType !== localTheme ? localTheme :  StoreHolder.themeStore.getType;
    let theme: ThemeOptions = {
      palette: {
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
            <Route path="/login" component={LoginPage} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
