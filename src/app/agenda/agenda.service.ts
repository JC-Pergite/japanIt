import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity';
import { Agenda } from '../shared/agenda';

@Injectable()
export class AgendaService {

  
  private plans: Activity[] = [];

  private agendas: Agenda[] = [
         new Agenda('DayOne', [new Activity('fushini', 5, 'evening')], ''),
         new Agenda('DayTwo', [new Activity('yasaka jinja', 5, 'dusk')], '')
  ];

  constructor() {}

  getAgendas() {
    return this.agendas;
  }

  getAgenda(id: number | string) {
    console.log(this.agendas[id]);
    return this.agendas[id]
  }

  getPlans() {
    return this.plans;
  }

  addAgenda(agenda: Agenda) {
     this.agendas.push(agenda);
     console.log(this.agendas);
  }

  editAgenda(oldAgenda: Agenda, newAgenda: Agenda) {
    this.agendas[this.agendas.indexOf(oldAgenda)] = newAgenda;
  }
  

  deleteAgenda(agenda: Agenda) {
    this.agendas.splice(this.agendas.indexOf(agenda), 1);
  }
  
}