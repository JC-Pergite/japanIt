import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { KyotoListComponent } from './sites-list/kyoto-list.component';
import { Event } from '../shared/event';
import { Agenda } from '../shared/agenda';
// import { AgendaComponent } from '../agenda/agenda.component';
import { AgendaService } from '../agenda/agenda.service';
import { CurrentPlanComponent } from '../agenda/current-plan/current-plan.component';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent, CurrentPlanComponent ],
  providers: [ KyotoSitesService, AgendaService ]
})
export class KyotoComponent implements OnInit {
	events: Event[];
  agendas: Agenda[];
	
  constructor(private router: Router, private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {}

  // onSelect(event: Event) {
  // 	this.router.navigate(['/kyoto', event.id]);
  // }

  ngOnInit() {
  		this.events = this.kyotoSitesService.getSites();
      // this.agendas = this.agendaService.getAgendas(); 

  }

}
