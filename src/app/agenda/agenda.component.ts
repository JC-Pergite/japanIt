import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
// import { DayDetailsComponent } from './day-details/day-details.component';

@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent ]
})
export class AgendaComponent {
}
