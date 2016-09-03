import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto/kyoto-sites.service';
import { AgendaService } from './agenda/agenda.service';
import './rxjs-operators';


@Component({
  moduleId: module.id,
  selector: 'oreNo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ KyotoSitesService, AgendaService ]
})

export class AppComponent {
  title = 'Konnichiwa-!';
}
