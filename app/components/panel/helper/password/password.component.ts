import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/helper/password/password.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProfileComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "oldpassword": ["", Validators.required],
      "newpassword": ["", Validators.required],
      "renewpassword": ["", Validators.required],
    });
  }

  onSubmit(value: string) {
    console.log(value);
  }
}
