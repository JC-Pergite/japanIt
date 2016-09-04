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

  addPlans(plans: Activity[]) {
    Array.prototype.push.apply(this.plans, plans);
  }

   addAgenda(agenda: Agenda) {
     this.agendas.push(agenda);
     console.log(this.agendas);
  }

     addAgendas(agendas: Agenda[]) {
    Array.prototype.push.apply(this.agendas, agendas);
     console.log(this.agendas);
  }
    
  editAgenda(oldAgenda: Agenda, newAgenda: Agenda) {
    this.agendas[this.agendas.indexOf(oldAgenda)] = newAgenda;
  }
  

  deleteAgenda(agenda: Agenda) {
    this.agendas.splice(this.agendas.indexOf(agenda), 1);
  }

  addPlan(oldDay, plan: Activity[]) {
     oldDay.activities.push(plan);
     console.log(this.plans);
  }

  //   addPlan(plan: Activity) {
  //    this.plans.push(plan);
  //    console.log(this.plans);
  // }
    
  editPlan(oldPlan: Activity, newPlan: Activity) {
    this.plans[this.plans.indexOf(oldPlan)] = newPlan;
  }
  

     deletePlan(plan: Activity) {
    this.plans.splice(this.plans.indexOf(plan), 1);
  }
  
}