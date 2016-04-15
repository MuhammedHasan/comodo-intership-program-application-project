import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DonationService} from './services/donation.service';
import {DbService} from './services/db.service';
import {UserService} from './services/user.service';
import {ReservationService} from './services/reservation.service';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS, HTTP_PROVIDERS, DonationService,
    UserService, ReservationService
]);

let db = new DbService();

if (!db.isDbInited())
    db.initDb();
