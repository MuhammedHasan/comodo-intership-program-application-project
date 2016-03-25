import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/needy/detail/detail.html',
  styleUrls: ['app/components/panel/needy/detail/detail.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DetailComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "description": ["", Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log(value);
  }
}
