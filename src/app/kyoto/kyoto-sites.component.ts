import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event';
import { KyotoSitesService } from './kyoto-sites.service';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../shared/agenda';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Activity } from "../shared/activity"; 
import { AgendaComponent } from "../agenda/agenda.component";

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-sites',
  templateUrl: 'kyoto-sites.component.html',
  styleUrls: ['kyoto-sites.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ AgendaService ]
})
export class KyotoSitesComponent implements OnInit, OnDestroy {
  mode = 'Observable';
  selectedEvent: Event;
  private eventIndex: number;
  private sub: any;
  plans: Activity[] = [];
  @Input() selectedAgenda: Agenda;
  @Output() saved = new EventEmitter();
  newSelectedAgenda: Agenda = null;
  // selectedPlans: Activity [] = null;
  isUnchanged = true;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {}
    // @Input() 
    // set selectedAgenda (selectedAgenda: Agenda) {
    //   this.agendaService.setAgenda(selectedAgenda)
    // }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventIndex = +params['id'];
      this.selectedEvent = this.kyotoSitesService.getSite(this.eventIndex);
      this.plans = this.kyotoSitesService.getPlans();
    })
  };


    addToAgenda(newEvent: any) {
         // this.oldSelectedAgenda = selectedAgenda(this.agendaIndex);

    const newActivity = new Activity(newEvent, null, null);
    console.log(newActivity);
    this.selectedAgenda.activities.push(newActivity);
    console.log(this.selectedAgenda);


          // console.log(this.selectedPlan);
     // this.plans.push(newEvent);
     // console.log(this.plans);
     //           console.log(this.item);

  }
  //  onSave(agenda: Agenda) {
  //    agenda = this.selectedAgenda;
  //     const newAgenda = new Agenda(agenda.name, agenda.activities);
  //     this.selectedAgenda = newAgenda;
  //     this.agendaService.editAgenda(agenda, newAgenda);
  //         console.log(this.selectedAgenda);
  //                         // console.log(this.oldSelectedAgenda);

  // }

    onSaved(event) {
      console.log(event);
      this.saved.emit({value: this.selectedAgenda});
    }

  //  onSubmit (activity: Activity){
    // const newActivity = new Activity(activity.name);
  //   this.plan = newActivity;
  //   this.kyotoSitesService.addEvent(this.plan);
  // }
  //   onSubmit () {
  //           console.log(this.plan);

  //     // this.selectedPlan = this.plan;
  //     console.log(this.plan)
  //   this.submitted.emit(this.plan);
  // }

  // addToAgenda(newEvent: any) {
  //   console.log(this.selectedAgenda);
  //   this.agendaService.addPlans(this.selectedAgenda.activities['name']);
  //   console.log(this.selectedAgenda)
  // }

  //   onSelectDay(day: Agenda) {
  //   this.selectedDay = day;
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

  // onSubmit (activity: Activity){
  //   const newActivity = new Activity(activity.name);
  //   this.plan = newActivity;
  //   this.kyotoSitesService.addEvent(this.plan);
  // }

  // addToAgenda(newEvent: any) {
  //    this.plans.push(newEvent);
  //    console.log(this.plans);
  // }

  //  addToAgenda(newEvent: any) {
  //    this.agendaService.addPlan(newEvent);
  //    console.log(this.plans);
  // }
