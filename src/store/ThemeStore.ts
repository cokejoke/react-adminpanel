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

  get type(): ThemeType {
    return this.theme.type;
  }

  set type(type: ThemeType) {
    this.theme.type = type;
  }

  get color(): string {
    return this.theme.color;
  }

  set color(color: string) {
    this.theme.color = color;
  }
}

export const themeStore: ThemeStore = new ThemeStore();