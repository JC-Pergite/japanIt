import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Agenda } from '../../shared/agenda';
import { AgendaService } from '../agenda.service';


@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda-days',
  templateUrl: 'agenda-days.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class AgendaDaysComponent {
  @Input() agenda: Agenda; 
  @Input() agendaId: number;
}