import {
  createMuiTheme, MuiThemeProvider,

  Theme,
  ThemeOptions
} from "@material-ui/core";
import { } from "axios";
import { } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import CustomAlert from "./components/CustomAlert";
import {
  DashboardPage,
  LoginPage,
  SettingsPage,
  UsersPage
} from "./components/pages";
import PrivateRoute from "./components/PrivateRoute";
import { history } from "./helpers/Helpers";
import { themeStore } from "./store/ThemeStore";

@observer
class App extends React.Component {
  public App() {
    history.listen(() => {});
  }

  componentDidMount() {
    setTimeout(
      () =>
        (document.body.style.cssText =
          "transition: ease-in-out background-color 0.2s !important;"),
      2000
    );
  }

  render() {
    let theme: ThemeOptions = {
      palette: {
        primary: {
          main: themeStore.color,
        },
        secondary: {
          main: themeStore.color,
        },
        type: themeStore.type,
      },
    };
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
