import {Injectable} from 'angular2/core'
import {Donation} from './donation'

export class Reservation extends Donation {
    reservationDescription: string;
}

@Injectable()
export class ReservationService {

    createReservation(reservation: Reservation) {
        let reservations: Array<Donation> = this.getAllReservation();
        reservations.push(reservation);
        localStorage.setItem("reservation", JSON.stringify(reservations));
    }

    getAllReservation(): Array<Reservation> {
        return JSON.parse(localStorage.getItem("reservation"));
    }

    getByTitle(title: string): Reservation {
        let reservations = this.getAllReservation();
        return reservations.filter((d) => d.title == title)[0];
    }

    deleteByTitle(title: string) {
        let reservations = this.getAllReservation();
        localStorage.setItem("reservation",
            JSON.stringify(reservations.filter((d) => d.title != title))
            );
    }
}
