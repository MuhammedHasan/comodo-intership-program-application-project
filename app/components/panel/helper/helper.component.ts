import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DonationComponent} from './donation/donation.component';
import {ProfileComponent} from './profile/profile.component'
import {NewDonationComponent} from './newDonation/newDonation.component'
import {DetailComponent} from './detail/detail.component'

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/helper/helper.html',
    styleUrls: [
        'app/components/panel/css/font-awesome.min.css',
        'app/components/panel/css/sb-admin-2.css'
    ],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/donation', name: 'Donation', component: DonationComponent, useAsDefault: true },
    { path: '/profile', name: 'Profile', component: ProfileComponent },
    { path: '/new-donation', name: 'NewDonation', component: NewDonationComponent },
    { path: '/detail/:title', name: 'Detail', component: DetailComponent },
])
export class HelperComponent {

    constructor() { }
}
