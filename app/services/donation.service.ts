import {Injectable} from 'angular2/core'

export class Donation {
    title: string;
    description: string;
    image: string;
    city: string;
}

@Injectable()
export class DonationService {

    createDonation(donation: Donation) {
        let donations: Array<Donation> = this.getAllDonation();
        donations.push(donation);
        localStorage.setItem("donations", JSON.stringify(donations));
    }

    getAllDonation(): Array<Donation> {
        return JSON.parse(localStorage.getItem("donations"));
    }

    getByTitle(title: string): Donation {
        let donations = this.getAllDonation();
        return donations.filter((d) => d.title == title)[0];
    }

    searchByTitle(title: string): Array<Donation> {
        let donations = this.getAllDonation();
        return donations.filter((d) => d.title.toLowerCase().indexOf(title) != -1);
    }

    getByCity(city): Array<Donation> {
        let donations = this.getAllDonation();
        return donations.filter((d) => d.city == city);
    }
}
