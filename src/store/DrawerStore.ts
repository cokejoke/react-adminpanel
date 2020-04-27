import { observable } from "mobx";

export default class DrawerStore {

  @observable
  private _open: boolean = false;
  get open(): boolean { return this._open; }
  set open(open: boolean) { this._open = open; }

  @observable
  private _name: string = "";
  get name(): string { return this._name; }
  set name(name: string) { this._name = name; }
  
}

export const drawerStore: DrawerStore = new DrawerStore();