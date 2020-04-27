import { alertStore, alertType } from "../store/AlertStore";

export class AlertService {

    public static create(type: alertType, message: string) {
        alertStore.type = type;
        alertStore.message = message;
        alertStore.open = true;
    }

}