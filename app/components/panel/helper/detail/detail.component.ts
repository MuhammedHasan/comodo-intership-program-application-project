import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Donation, DonationService} from '../../../../services/donation.service';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/helper/detail/detail.html',
  styleUrls: ['app/components/panel/helper/detail/detail.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DetailComponent {
  donation: Donation;
  constructor(dn: DonationService, params: RouteParams) {
    this.donation = dn.getByTitle(decodeURIComponent(params.get("title")));
  }
}
