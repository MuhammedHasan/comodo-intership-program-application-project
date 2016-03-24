import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
declare var jQuery: any;

@Component({
  selector: 'home',
  templateUrl: '/app/components/home/home.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls:['app/components/home/custom.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    jQuery('#siteNav').affix({
    	offset: {
    		top: 100
    	}
    })
  }
}
