import {
  createStyles,

  Grid, Theme, WithStyles,

  withStyles
} from "@material-ui/core";
import React from "react";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "30px",
      marginBottom: theme.spacing(2),
    },
  });

export type Props = WithStyles;

class WidgetHeader extends React.Component<Props> {
  public render() {
    return (
      <Grid className={this.props.classes.root} container direction="row">
        <Grid item xs={6}>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(WidgetHeader);
