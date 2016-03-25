import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DonationComponent} from './donation/donation.component';

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
  { path: '/donation', name: 'Helper', component: DonationComponent },
])
export class HelperComponent {

  constructor() { }
}
