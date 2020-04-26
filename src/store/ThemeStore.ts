import { computed, observable } from "mobx";
import { deepPurple } from "@material-ui/core/colors";

export type ThemeType = "dark" | "light";

export type Theme = {
  type: ThemeType;
  color: any;
};

export default class ThemeStore {
  @observable
  private theme: Theme = {
    type: localStorage.getItem("theme") === "dark" ? "dark" : "light",
    color: this.getLocalTheme(),
  };

  getLocalTheme(): any {
    if (localStorage.getItem("color") == null) {
      return deepPurple;
    } else {
      return localStorage.getItem("color");
    }
  }

  @computed
  get getType(): ThemeType {
    return this.theme.type;
  }

  set setType(type: ThemeType) {
    this.theme.type = type;
  }

  @computed
  get getColor(): any {
    return this.theme.color;
  }

  set setColor(color: any) {
    this.theme.color = color;
  }
}
