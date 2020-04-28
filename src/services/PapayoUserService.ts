import Axios from "axios";
import { User } from "../dto/User";
import { history } from "../helpers/Helpers";
import { AlertService } from "./AlertService";
import { BASE_URL } from "./ServiceHolder";
import { UserService } from "./UserService";

export class PapayoUserService implements UserService {
  login(name: string, password: string, query?: string): void {
    Axios.post(BASE_URL + "/api/user/login", {
      email: name,
      password: password,
    })
      .then((response) => {
        localStorage.setItem("user", response.data);
        history.push("/");
        AlertService.create("success", "Successfully logged in!");
      })
      .catch((error) => {
        try {
          console.log(error.response.data);
          AlertService.create(
            "error",
            "Invalid username, e-mail adress or password."
          );
        } catch (error) {
          if (localStorage.getItem("user")) {
            this.logout();
          }
          AlertService.create("error", "Backend Offline");
          console.log(error);
        }
      });
  }

  register(): void {
    throw new Error("Method not implemented.");
  }

  logout(): void {
    localStorage.removeItem("user");
    history.push("/login");
    AlertService.create("success", "You've been logged out!");
  }

  async getUsers(
    page: number,
    pageSize: number,
    query?: string
  ): Promise<{ total: number; data: User[] }> {
    let users: { total: number; data: User[] } = { total: 0, data: [] };

    await Axios.get<{ total: number; data: User[] }>(
      BASE_URL +
        `/api/user?${
          query ? "query=" + query + "&" : ""
        }page=${page}&pageSize=${pageSize}`
    )
      .then((response) => {
        users = response.data;
      })
      .catch((error) => {
        try {
          console.log(error.response.data);
        } catch (error) {
          if (localStorage.getItem("user")) {
            this.logout();
          }
          AlertService.create("error", "Backend Offline");
          console.log(error);
        }
      });

    return Promise.resolve(users);
  }
}
