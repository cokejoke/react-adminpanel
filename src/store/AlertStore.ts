import { computed, observable } from "mobx";
import { AlertProps } from "@material-ui/lab";

export default class AlertStore {

  @observable
  private open: boolean = false;
  @computed get isOpen(): boolean { return this.open; }
  set setOpen(open: boolean) { this.open = open; }

  @observable
  private type: "success" | "info" | "warning" | "error" | undefined = undefined;
  @computed get getType(): "success" | "info" | "warning" | "error" | undefined { return this.type; }
  set setType(type: "success" | "info" | "warning" | "error" | undefined) { this.type = type; }

  @observable
  private message: String = "";
  @computed get getMessage(): String { return this.message; }
  set setMessage(message: String) { this.message = message; }

}