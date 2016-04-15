import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DonationService, Donation} from '../../../../services/donation.service';

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/admin/donation/donation.html',
    styleUrls: ['app/components/panel/admin/donation/donation.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class DonationComponent {
    donations: Array<Donation>;

    constructor(private dns: DonationService) {
      this.donations = dns.getAllDonation();
    }
}
