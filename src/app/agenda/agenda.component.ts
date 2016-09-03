import { Component } from '@angular/core';
import { Agenda } from '../shared/agenda';
import { AgendaService } from './agenda.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
// import { DayDetailsComponent } from './day-details/day-details.component';
// import { KyotoComponent } from '../kyoto/kyoto.component';
// import { CurrentPlanComponent } from './current-plan/current-plan.component';


@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent ],
  providers: [ AgendaService ]

})
export class AgendaComponent{

}
