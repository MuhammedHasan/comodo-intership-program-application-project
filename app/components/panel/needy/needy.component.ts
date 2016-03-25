import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileComponent} from './profile/profile.component';
import {DonationComponent} from './donation/donation.component';
import {ReservationComponent} from './reservation/reservation.component'
@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/needy/needy.html',
  styleUrls: [
    'app/components/panel/css/font-awesome.min.css',
    'app/components/panel/css/sb-admin-2.css'
  ],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/profile', name: 'Profile', component: ProfileComponent },
  { path: '/donation', name: 'Donation', component: DonationComponent },
  { path: '/reservation', name: 'Reservation', component: ReservationComponent },
])
export class NeedyComponent {

  constructor() { }
}
