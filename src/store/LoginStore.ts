import { observable } from "mobx";
import { AlertService } from "../services/AlertService";
import { ServiceHolder } from "../services/ServiceHolder";

export default class LoginStore {

  @observable
  private _loading: boolean = false;
  get loading(): boolean { return this._loading; }
  set loading(loading: boolean) { this._loading = loading; }

  @observable
  private _name: string = "";
  get name(): string { return this._name; }
  set name(name: string) { this._name = name; }

  @observable
  private _password: string = "";
  get password(): string { return this._password; }
  set password(password: string) { this._password = password; }

  public async login(): Promise<void> {
    //this.loading = true;
    try {
      if (!this.name) {
        AlertService.create("error", "Please provide an e-mail address or username.");
        return;
      }
      if (!this.password) {
        AlertService.create("error", "Please provide a password.");
        return;
      }
      await ServiceHolder.userService.login(this.name, this.password);
      this.loading = false;
    } catch (e) {
      this.loading = false;
      throw e;
    }
  }

  public async register(): Promise<void> {
    //this.loading = true;
    try {
      if (!this.name) {
        AlertService.create("error", "Please provide an e-mail address or username.");
        return;
      }
      if (!this.password) {
        AlertService.create("error", "Please provide a password.");
        return;
      }
      await ServiceHolder.userService.register(this.name, this.password);
      await ServiceHolder.userService.login(this.name, this.password);
      this.loading = false;
    } catch (e) {
      this.loading = false;
      throw e;
    }
  }
}