import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Donation, DonationService} from '../../../../services/donation.service';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/needy/detail/detail.html',
  styleUrls: ['app/components/panel/needy/detail/detail.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DetailComponent {
  form: ControlGroup;
  donation: Donation;
  constructor(fb: FormBuilder, dn: DonationService, params: RouteParams) {
    this.form = fb.group({
      "description": ["", Validators.required]
    });
    this.donation = dn.getByTitle(decodeURIComponent(params.get("title")));
  }

  onSubmit(value: string) {
    console.log(value);
  }
}
