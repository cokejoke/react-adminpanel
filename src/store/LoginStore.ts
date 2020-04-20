import { computed, observable } from "mobx";
import { LocalUserService } from "../services/LocalUserService";
import { ServiceHolder } from "../services/ServiceHolder";
import { AlertService } from "../services/AlertService";

export default class LoginStore {

  @observable
  private loading: boolean = false;
  @computed get getLoading(): boolean { return this.loading; }
  set setLoading(loading: boolean) { this.loading = loading; }

  @observable
  private name: string = "";
  @computed get getName(): string { return this.name; }
  set setName(name: string) { this.name = name; }

  @observable
  private password: string = "";
  @computed get getPassword(): string { return this.password; }
  set setPassword(password: string) { this.password = password; }

  public async login(): Promise<void> {
    //this.setLoading = true;
    try {
      if (this.name === "") {
        AlertService.create("error", "Please provide an e-mail address or username.");
        return;
      }
      if (this.password === "") {
        AlertService.create("error", "Please provide a password.");
        return;
      }
      await ServiceHolder.userService.login(this.name, this.password);
      this.setLoading = false;
    } catch (e) {
      this.setLoading = false;
      throw e;
    }
  }
}