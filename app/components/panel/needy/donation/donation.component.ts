import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Donation, DonationService} from '../../../../services/donation.service';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/needy/donation/donation.html',
  styleUrls: ['app/components/panel/needy/donation/donation.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DonationComponent {
  donations: Array<Donation>;
  constructor(private dn: DonationService) { }

  search(title: string) {
    this.donations = this.dn.searchByTitle(title.toLowerCase());
    if (title == "")
      this.donations = [];
  }
}
