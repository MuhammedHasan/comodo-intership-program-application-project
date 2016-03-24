import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'home',
  templateUrl: '/app/components/home/home.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
  constructor() {}
}
