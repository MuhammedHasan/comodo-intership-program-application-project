import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DonationComponent} from './donation/donation.component';
import {HelperComponent} from './helper/helper.component';
import {NeedyComponent} from './needy/needy.component';
import {ReservationComponent} from './reservation/reservation.component';

@Component({
    selector: 'admin',
    templateUrl: '/app/components/panel/admin/admin.html',
    styleUrls: [
        'app/components/panel/css/font-awesome.min.css',
        'app/components/panel/css/sb-admin-2.css'
    ],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/donation', name: 'Donation', component: DonationComponent,
        useAsDefault: true
    },
    { path: '/helper', name: 'Helper', component: HelperComponent },
    { path: '/needy', name: 'Needy', component: NeedyComponent },
    { path: '/reservation', name: 'Reservation', component: ReservationComponent }
])
export class AdminComponent { }
