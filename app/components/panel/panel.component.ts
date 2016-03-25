import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HelperComponent} from './helper/helper.component';

@Component({
  selector: 'panel',
  templateUrl: 'app/components/panel/panel.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/helper/...', name: 'Helper', component: HelperComponent },
])
export class PanelComponent { }
