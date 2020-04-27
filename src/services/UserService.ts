import { User } from "../dto/User";

export interface UserService {

    login(name : string, password : string) : void;
    register() : void;
    logout() : void;
    getUsers(page: number, pageSize: number, query?: string) : Promise<{ total: number; data: User[] }>;

}