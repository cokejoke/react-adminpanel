import { computed, observable } from "mobx";

export type ThemeType = "dark" | "light";

export default class ThemeStore {
  @observable
  private type: ThemeType = "light";
  @computed get getType(): ThemeType { return this.type; }
  set setType(type: ThemeType) { this.type = type; }
  
}