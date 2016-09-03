import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { KyotoSitesComponent } from './kyoto-sites.component';
import { KyotoListComponent } from './sites-list/kyoto-list.component';
import { Event } from '../shared/event';
// import { Agenda } from '../shared/agenda';
// import { AgendaComponent } from '../agenda/agenda.component';
import { AgendaService } from '../agenda/agenda.service';
// import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent ],
  providers: [ KyotoSitesService, AgendaService ]
})
export class KyotoComponent implements OnInit {

  events: Event[];
  
  constructor(private kyotoSitesService: KyotoSitesService) {}

  ngOnInit() {
      this.events = this.kyotoSitesService.getSites();
  }
}
