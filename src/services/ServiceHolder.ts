import { PapayoUserService } from "./PapayoUserService";
import { UserService } from "./UserService";

export const BASE_URL = "https://api-dev-papayo.steffen.space";

export class ServiceHolder {
  public static readonly userService: UserService = new PapayoUserService();
}

