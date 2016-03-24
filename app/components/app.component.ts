import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import 'rxjs/Rx'


@Component({
  selector: 'app',
  templateUrl: '/app/components/base.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/login', name: 'Login', component: LoginComponent, },

])
export class AppComponent { }
