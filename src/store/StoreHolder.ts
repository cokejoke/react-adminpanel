import AlertStore from "./AlertStore";
import DrawerStore from "./DrawerStore";
import ThemeStore from "./ThemeStore";

export class StoreHolder {
    public static alertStore: AlertStore = new AlertStore();
    public static drawerStore: DrawerStore = new DrawerStore();
    public static themeStore: ThemeStore = new ThemeStore();
}