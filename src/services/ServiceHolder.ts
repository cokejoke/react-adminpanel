import { LocalUserService } from "./LocalUserService";
import { UserService } from "./UserService";

export const BASE_URL = "http://localhost:8080";

export class ServiceHolder {
    public static readonly userService: UserService = new LocalUserService();
}