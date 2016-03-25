import {Injectable} from 'angular2/core'

export class Donation {
  title: string;
  description: string;
  image: string;
  city: string;
}

@Injectable()
export class DonationService {
  constructor() { }

  createDonation(donation: Donation) {
    let donations: Array<Donation>;
    if (localStorage.getItem("donations") == null) {
      donations = [donation];
    }
    else {
      donations = this.getAllDonation();
      typeof (donations);
      donations.push(donation);
    }
    localStorage.setItem("donations", JSON.stringify(donations));
  }

  getAllDonation(): Array<Donation> {
    let donations: Array<Donation>;
    donations = JSON.parse(localStorage.getItem("donations"));
    return donations;
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
