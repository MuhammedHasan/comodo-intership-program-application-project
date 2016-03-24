import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'login',
  templateUrl: '/app/components/login/login.html',
  styleUrls: ['app/components/login/login.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log(value);
  }

}
