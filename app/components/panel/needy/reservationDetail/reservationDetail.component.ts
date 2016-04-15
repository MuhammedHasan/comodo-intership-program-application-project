import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Reservation, ReservationService} from '../../../../services/reservation.service';

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/needy/reservationDetail/reservationDetail.html',
    styleUrls: ['app/components/panel/needy/reservationDetail/reservationDetail.css'],
})
export class ReservationDetailComponent {
    reservation: Reservation;

    constructor(private rss: ReservationService, params: RouteParams) {
        this.reservation = this.rss.getByTitle(
            decodeURIComponent(params.get("title")));
    }
}
