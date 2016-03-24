import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DbService} from './services/db.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS, DbService
]);
