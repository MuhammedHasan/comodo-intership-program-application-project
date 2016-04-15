import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Reservation,ReservationService} from '../../../../services/reservation.service';

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/admin/reservation/reservation.html',
    styleUrls: ['app/components/panel/admin/reservation/reservation.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ReservationComponent {
    reservations: Array<Reservation>;

    constructor(private rss: ReservationService) {
      this.reservations = rss.getAllReservation();
    }
}
