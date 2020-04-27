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
    color: this.getLocalColor(),
  };

  getLocalColor(): string {
    let color: string | null = localStorage.getItem("color");
    if (!color) {
      return deepPurple[500];
    } else {
      return color;
    }
  }

  get getType(): ThemeType {
    return this.theme.type;
  }

  set setType(type: ThemeType) {
    this.theme.type = type;
  }

  get getColor(): string {
    return this.theme.color;
  }

  set setColor(color: string) {
    this.theme.color = color;
  }
}
