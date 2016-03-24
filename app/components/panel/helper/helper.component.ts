import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/helper/helper.html',
  styleUrls: ['app/components/panel/helper/helper.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class HelperComponent {
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
