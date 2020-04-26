import React from "react";
import {} from "mobx";
import { observer } from "mobx-react";
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme,
  ThemeOptions,
} from "@material-ui/core";
import {} from "axios";
import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./helpers/Helpers";
import CustomAlert from "./components/CustomAlert";
import { StoreHolder } from "./store/StoreHolder";
import {
  PrivateRoute,
  SettingsPage,
  DashboardPage,
  LoginPage,
  UsersPage,
} from "./components";

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
        primary: StoreHolder.themeStore.getColor,
        secondary: StoreHolder.themeStore.getColor,
        type: StoreHolder.themeStore.getType,
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
