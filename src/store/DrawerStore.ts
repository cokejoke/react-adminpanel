import { computed, observable } from "mobx";

export default class DrawerStore {

  @observable
  private open: boolean = false;
  @computed get isOpen(): boolean { return this.open; }
  set setOpen(open: boolean) { this.open = open; }

  @observable
  private name: String = "";
  @computed get getName(): String { return this.name; }
  set setName(name: String) { this.name = name; }
  
}