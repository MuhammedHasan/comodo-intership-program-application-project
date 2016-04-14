import {Injectable} from 'angular2/core'
import {User} from './user.service';

@Injectable()
export class DbService {

    isDbInited() {
        if (localStorage.getItem("donations") == null
            || localStorage.getItem("users") == null)
            return false;
        return true;
    }

    initDb() {
        localStorage.setItem("donations", JSON.stringify([]));
        localStorage.setItem("authentication", "anonymous");

        let admin = new User();
        admin.email = 'admin@example.com';
        admin.firstName = 'admin';
        admin.lastName = 'admin';
        admin.password = '123123123';
        admin.status = 'admin';

        let helper = new User();
        helper.email = 'hasan@example.com';
        helper.firstName = 'hasan';
        helper.lastName = 'celik';
        helper.password = '123123123';
        helper.status = 'helper';

        let needy = new User();
        needy.email = 'ahmet@example.com';
        needy.firstName = 'ahmet';
        needy.lastName = 'celik';
        needy.password = '123123123';
        needy.status = 'needy';

        localStorage.setItem("users", JSON.stringify([
            admin, helper, needy
        ]));
    }
}
