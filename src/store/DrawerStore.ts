import { computed, observable } from "mobx";

export default class DrawerStore {

  @observable
  private open: boolean = false;
  @computed get isOpen(): boolean { return this.open; }
  set setOpen(open: boolean) { this.open = open; }

  @observable
  private name: string = "";
  @computed get getName(): string { return this.name; }
  set setName(name: string) { this.name = name; }
  
}