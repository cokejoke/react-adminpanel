import {
  Button,
  Checkbox,
  createStyles,
  FormControlLabel,
  Grid,
  Hidden,
  TextField,
  Theme,
  Typography,
  WithStyles,
  withStyles,
  Link,
  Divider,
} from "@material-ui/core";
import autobind from "autobind-decorator";
import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import AuthStore from "../../store/AuthStore";

class CheckboxStore {
  @observable
  private _checked: boolean = false;

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
    background: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundImage:
        "url(" + window.location.origin + "/resources/login.jpg)",
    },
    form: {
      width: "100%",
    },
    heading: {
      marginBottom: "40px",
      color: theme.palette.primary.main,
    },
    rememberme: {
      padding: "10px 0",
    },
    registerDivider: {
      margin: "20px",
      marginTop: "30px",
    },
  });

type Props = WithStyles;

@observer
class RegisterPage extends React.Component<Props> {
  private store = new AuthStore();
  private checkboxStore = new CheckboxStore();

  public render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={0}>
          <Grid item xl={5} sm={6} xs={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item xl={6} sm={8} xs={6}>
                <Typography className={this.props.classes.heading} variant="h3">
                  Register
                </Typography>
                <form
                  className={this.props.classes.form}
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <TextField
                    fullWidth={true}
                    type="text"
                    label="Username"
                    variant="outlined"
                    onChange={(e) => this.onUserNameChanged(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth={true}
                    type="text"
                    label="E-Mail"
                    variant="outlined"
                    onChange={(e) => this.onNameChanged(e.target.value)}
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth={true}
                    type="password"
                    label="Password"
                    variant="outlined"
                    helperText="An uppercase letter A lowercase letter A number A special character '#?!@$%^&*-'"
                    onChange={(e) => this.onPasswordChanged(e.target.value)}
                  />
                  <br />
                  <FormControlLabel
                    className={this.props.classes.rememberme}
                    control={
                      <Checkbox
                        checked={this.checkboxStore.checked}
                        onChange={this.handleCheckboxChange}
                        name="remember-me"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Grid container>
                    <Grid item xs>
                      <Button type="submit" variant="contained" color="primary">
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                  <Divider
                    className={this.props.classes.registerDivider}
                    variant="middle"
                  />
                  <Grid container justify="center">
                    <Grid item>
                      <Link href="/login" underline="none">
                        Alredy have an account? Sign In
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Hidden only={["xs"]}>
            <Grid
              className={this.props.classes.background}
              item
              xl={7}
              xs={6}
            ></Grid>
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
      await this.store.register();
    } catch (e) {
      alert(e.message);
    }
  }

  private onUserNameChanged(username: string): void {
    this.store.username = username;
  }

  private onNameChanged(name: string): void {
    this.store.name = name;
  }

  private onPasswordChanged(password: string): void {
    this.store.password = password;
  }

  @autobind
  private handleCheckboxChange(): void {
    this.checkboxStore.checked = !this.checkboxStore.checked;
  }
}

export default withStyles(styles)(RegisterPage);
