import {
  createStyles,

  Grid, Theme, WithStyles,

  withStyles
} from "@material-ui/core";
import React from "react";
import { drawerStore } from "../../store/DrawerStore";
import Navigation from "../Navigation";
import UsersWidget from "../widgets/UsersWidget";

export const styles = (theme: Theme) => createStyles({});

export type Props = WithStyles;

class DashboardPage extends React.Component<Props> {
  public render() {
    drawerStore.name = "Dashboard";
    return (
      <Navigation>
        <Grid container direction="row">
          <Grid item xs={4}>
            <UsersWidget />
          </Grid>
        </Grid>
      </Navigation>
    );
  }
}

export default withStyles(styles)(DashboardPage);
