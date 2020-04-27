import React from "react";
import Navigation from "./Navigation";
import { StoreHolder } from "../store/StoreHolder";
import {
  WithStyles,
  Theme,
  withStyles,
  createStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import UsersWidget from "./widgets/UsersWidget";

export const styles = (theme: Theme) => createStyles({});

export type Props = WithStyles;

class DashboardPage extends React.Component<Props> {
  public render() {
    StoreHolder.drawerStore.setName = "Dashboard";
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
