import { UserService } from "./UserService";
import { BASE_URL } from "./ServiceHolder";
import { AlertService } from "./AlertService";
import Axios from "axios";
import { AxiosResponse } from "axios";
import { history } from "../helpers/Helpers";
import { User } from "../dto/User";

export class PapayoUserService implements UserService {
    login(name: string, password: string): void {
        Axios.post(BASE_URL + "/api/user/login", {
            email: name,
            password: password
        }).then(response => {
            localStorage.setItem("user", response.data);
            history.push("/");
            AlertService.create("success", "Successfully logged in!");
        }).catch(error => {
            console.log(error.response.data);
            AlertService.create("error", "Invalid username, e-mail adress or password.");
        });
    }
    register(): void {
        throw new Error("Method not implemented.");
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }
    async getUsers(page: number, pageSize: number): Promise<User[]> {
        let users: User[] = [];
        
        await Axios.get<User[]>(BASE_URL + `/api/user?page=${page}&pageSize=${pageSize}`).then(response => {
            users = response.data;
        }).catch(error => {
            console.log(error.response.data);
        });
        
        return Promise.resolve(users);
    }
}