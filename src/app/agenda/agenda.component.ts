import { Component, OnInit } from '@angular/core';
import { Agenda } from '../shared/agenda';
import { AgendaService } from './agenda.service';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent, CurrentPlanComponent ],
  providers: [ AgendaService ]

})
export class AgendaComponent{
	agendas: Observable<any>;
	constructor(route: ActivatedRoute) {
		this.agendas = route.data.pluck('agendas');
	}
}
