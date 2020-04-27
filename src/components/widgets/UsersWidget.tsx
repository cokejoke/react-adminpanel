import React from "react";
import {
  WithStyles,
  Theme,
  withStyles,
  createStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import UsersIcon from "@material-ui/icons/Group";
import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";
import { ServiceHolder } from "../../services/ServiceHolder";
import { User } from "../../dto/User";
import { observable } from "mobx";
import { observer } from "mobx-react";

export const styles = (theme: Theme) => createStyles({});

export type Props = WithStyles;

class UsersWidgetStore {
  @observable
  private _users: number = 0;

  get users() {
    return this._users;
  }

  set users(users: number) {
    this._users = users;
  }
}

@observer
class UsersWidget extends React.Component<Props> {
  private usersWidgetStore: UsersWidgetStore = new UsersWidgetStore();

  componentDidMount() {
    ServiceHolder.userService
      .getUsers(1, 1)
      .then((response: { total: number; data: User[] }) => {
        this.usersWidgetStore.users = response.total;
      });
  }

  public render() {
    return (
      <div>
        <Widget clickLink="/users">
          <WidgetHeader>
            <Grid container spacing={2}>
              <Grid item>
                <UsersIcon />
              </Grid>
              <Grid item>
                <span>Users</span>
              </Grid>
            </Grid>
          </WidgetHeader>
          <span>
            Registered: <b>{this.usersWidgetStore.users}</b>
          </span>
        </Widget>
      </div>
    );
  }
}

export default withStyles(styles)(UsersWidget);
