import * as React from "react";
import LoginStore from "../store/LoginStore";
import { observer } from "mobx-react";
import { TextField, Button, CircularProgress, Theme, createStyles, WithStyles, withStyles, Grid, Hidden, Typography } from "@material-ui/core";
import autobind from "autobind-decorator";
import { indigo } from "@material-ui/core/colors";
import background from "../resources/login.jpg";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    background: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundImage: "url(" + background + ")"
    },
    form: {
      width: "100%"
    },
    heading: {
      marginBottom: "40px",
      color: indigo["500"]
    }
  });

type Props = WithStyles;

@observer
class LoginPage extends React.Component<Props> {

  private store = new LoginStore();

  public render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={0}>
          <Grid item xl={5} sm={6} xs={12}>
            <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
              <Grid item xl={6} sm={8} xs={6}>
                <Typography className={this.props.classes.heading} variant="h3">Login</Typography>
                <form className={this.props.classes.form} onSubmit={e => this.handleSubmit(e)}>
                  <TextField id="outlined-basic" fullWidth={true} type="text" label="Username or E-Mail" variant="outlined" onChange={e => this.onNameChanged(e.target.value)} />
                  <br /><br />
                  <TextField id="outlined-basic" fullWidth={true} type="password" label="Password" variant="outlined" onChange={e => this.onPasswordChanged(e.target.value)} />
                  <br /><br />
                  <Button type="submit" variant="contained" color="primary">Sign in</Button>
                  {this.store.getLoading && <CircularProgress size={24} />}
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Hidden only={["xs"]}>
            <Grid className={this.props.classes.background} item xl={7} xs={6}></Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }

  private handleSubmit(e: any) {
    e.preventDefault();
    this.signIn();
  }

  @autobind
  private async signIn(): Promise<void> {
    try {
      await this.store.login();
    } catch (e) {
      alert(e.message);
    }
  }

  private onNameChanged(name: string): void {
    this.store.setName = name;
  }

  private onPasswordChanged(password: string): void {
    this.store.setPassword = password;
  }
}

export default withStyles(styles)(LoginPage);
