import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: '/app/components/login/login.html',
    styleUrls: ['app/components/login/login.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder, private us: UserService, private router: Router) {
        this.form = fb.group({
            "email": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    onSubmit(value: string) {
        let userStatus = this.us.authenticate(value['email'], value['password']);
        if (userStatus == 'admin')
            this.router.navigate(['Panel','Admin']);
        if (userStatus == 'helper')
            this.router.navigate(['Panel','Helper']);
        if (userStatus == 'needy')
            this.router.navigate(['Panel', 'Needy']);
    }
}
