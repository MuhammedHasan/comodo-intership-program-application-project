import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Donation, DonationService} from '../../../../services/donation.service';
import {Reservation, ReservationService} from '../../../../services/reservation.service';

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/needy/detail/detail.html',
    styleUrls: ['app/components/panel/needy/detail/detail.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DetailComponent {
    form: ControlGroup;
    donation: Donation;

    constructor(fb: FormBuilder, private dn: DonationService,
        private params: RouteParams, private rss: ReservationService,
        private router: Router) {

        this.form = fb.group({
            "description": ["", Validators.required]
        });

        this.donation = dn.getByTitle(decodeURIComponent(params.get("title")));
    }

    onSubmit(value: string) {
        let reservation = new Reservation();
        reservation.title = this.donation.title;
        reservation.description = this.donation.description;
        reservation.image = this.donation.image;
        reservation.city = this.donation.city;
        reservation.reservationDescription = value['description'];
        this.rss.createReservation(reservation);
        this.dn.deleteByTitle(this.donation.title);
        this.router.navigate(['Reservation']);
    }
}
