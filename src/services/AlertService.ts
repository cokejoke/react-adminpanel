import { StoreHolder } from "../store/StoreHolder";

export class AlertService {

    public static create(type: "success" | "info" | "warning" | "error", message: string) {
        StoreHolder.alertStore.setType = type;
        StoreHolder.alertStore.setMessage = message;
        StoreHolder.alertStore.setOpen = true;
    }

}