import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Agenda } from '../../shared/agenda';
import { AgendaDaysComponent } from './agenda-days.component';
import { AgendaService } from '../agenda.service';

@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda-list',
  templateUrl: 'agenda-list.component.html',
  directives: [ ROUTER_DIRECTIVES, AgendaDaysComponent ]
})
export class AgendaListComponent implements OnInit {
  agendas: Agenda[] = [];
	
  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
  		this.agendas = this.agendaService.getAgendas();
  }

}
