import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto/kyoto-sites.service';


@Component({
  moduleId: module.id,
  selector: 'oreNo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ KyotoSitesService ]
})

export class AppComponent {
  title = 'Konnichiwa-!';
}
