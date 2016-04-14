import {Injectable} from 'angular2/core'

export class User {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    status: string;
}

@Injectable()
export class UserService {

    createUser(user: User) {
        let users: Array<User> = this.getAllUser();
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }

    getAllUser(): Array<User> {
        return JSON.parse(localStorage.getItem("users"));
    }

    authenticate(email, password) {
        let users: Array<User> = this.getAllUser();
        let user = users.filter(
          (x) => x.email == email && x.password == password)[0];
        if(user)
          localStorage.setItem("authentication", user.status);
    }

    authentication(){
      return localStorage.getItem("authentication");
    }
}
