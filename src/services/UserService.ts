export interface UserService {

    login(name : String, password : String) : void;
    register() : void;
    logout() : void;

}