import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {User, UserService} from '../../../../services/user.service';

@Component({
    selector: 'helper',
    templateUrl: '/app/components/panel/admin/needy/needy.html',
    styleUrls: ['app/components/panel/admin/needy/needy.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NeedyComponent {
  users: Array<User>;

  constructor(private uss: UserService) {
      this.users = uss.getAllUser().filter((x)=> x.status=="needy");
  }
}
