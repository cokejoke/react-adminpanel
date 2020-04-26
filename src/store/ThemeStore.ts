import { computed, observable } from "mobx";

export type ThemeType = "dark" | "light";

export type Theme = {
  type: ThemeType;
  color: string;
};

export default class ThemeStore {
  @observable
  private type: ThemeType =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";

  @observable
  private theme: Theme = {
    type: localStorage.getItem("theme") === "dark" ? "dark" : "light",
    color: "#673ab7",
  };

  @computed get getType(): ThemeType {
    return this.theme.type;
  }

  set setType(type: ThemeType) {
    this.theme.type = type;
  }
}
