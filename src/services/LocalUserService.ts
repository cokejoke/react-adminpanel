import { User } from "../dto/User";
import { history } from "../helpers/Helpers";
import { AlertService } from "./AlertService";
import { UserService } from "./UserService";

export class LocalUserService implements UserService {
    async getUsers(page: number, pageSize: number, query?: string): Promise<{ total: number; data: User[] }> {
        return Promise.resolve({ total: 0, data: [] });
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
        localStorage.removeItem("user");
        history.push("/login");
        AlertService.create("success", "You've been logged out!");
    }

}