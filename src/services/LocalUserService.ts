import { UserService } from "./UserService";
import Axios from "axios";
import { BASE_URL } from "./ServiceHolder";
import { User } from "../dto/User";
import { history } from "../helpers/Helpers";
import { AlertService } from "./AlertService";

export class LocalUserService implements UserService {
    getUsers(page: number, pageSize: number): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    login(name: string, password: string): void {
        localStorage.setItem("user", "test");
        history.push("/");
        AlertService.create("success", "Successfully logged in!");
        /*Axios.post(BASE_URL + '/user/login', {
            name: name,
            password: password
        }).then(response => {
            localStorage.setItem("user", response.data);
            history.push("/");
            AlertService.create("success", "Successfully logged in!");
        }).catch(error => {
            AlertService.create("error", "Invalid username, e-mail adress or password.");
        });*/
    }
    register(): void {
        throw new Error("Method not implemented.");
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }

}