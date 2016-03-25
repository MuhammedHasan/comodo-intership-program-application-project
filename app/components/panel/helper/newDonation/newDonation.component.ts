import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Donation, DonationService} from '../../../../services/donation.service';

@Component({
  selector: 'helper',
  templateUrl: '/app/components/panel/helper/newDonation/newDonation.html',
  styleUrls: ['app/components/panel/helper/newDonation/newDonation.css'],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class NewDonationComponent {
  form: ControlGroup;
  image: string;
  constructor(fb: FormBuilder, private dn: DonationService, private router: Router) {
    this.form = fb.group({
      "title": ["", Validators.required],
      "description": ["", Validators.required],
      "city": ["", Validators.required]
    });
  }

  onSubmit(value) {
    let d = new Donation();
    d.title = value['title'];
    d.description = value['description'];
    d.image = this.image;
    d.city = value['city'];
    this.dn.createDonation(d);
    this.router.navigate(["Donation"]);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => this.image = myReader.result;
    myReader.readAsDataURL(file);
  }
}
