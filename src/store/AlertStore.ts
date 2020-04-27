import { observable } from "mobx";

export type alertType = "success" | "info" | "warning" | "error" | undefined;

export default class AlertStore {
  @observable
  private _open: boolean = false;
  get open(): boolean {
    return this._open;
  }
  set open(open: boolean) {
    this._open = open;
  }

  @observable
  private _type: alertType = undefined;
  get type() {
    return this._type;
  }
  set type(type: alertType) {
    this._type = type;
  }

  @observable
  private _message: string = "";
  get message() {
    return this._message;
  }
  set message(message: string) {
    this._message = message;
  }
}

export const alertStore: AlertStore = new AlertStore();
