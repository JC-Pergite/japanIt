import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event';
import { KyotoSitesService } from './kyoto-sites.service';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../shared/agenda';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Activity } from "../shared/activity"; 
import { AgendaComponent } from "../agenda/agenda.component";
// import { CurrentPlanComponent } from "../agenda/current-plan/current-plan.component";

// import { SelectedDayComponent } from "../agenda/selected-day/selected-day.component";



@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-sites',
  templateUrl: 'kyoto-sites.component.html',
  styleUrls: ['kyoto-sites.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ AgendaService ]
})
export class KyotoSitesComponent implements OnInit, OnDestroy {
  selectedEvent: Event;
  private eventIndex: number;
  private sub: any;
  plans: Activity[] = [];
  @Input() plan: Activity;
  @Output() submitted = new EventEmitter();


  // selectedAgenda: Agenda;
    // private agendaIndex: number;


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventIndex = +params['id'];
      this.selectedEvent = this.kyotoSitesService.getSite(this.eventIndex);
            this.plans = this.kyotoSitesService.getPlans();

    })};
  //     this.sub = this.route.params.subscribe(params => {
  //     this.agendaIndex = +params['id'];
  //     this.selectedAgenda = this.agendaService.getAgenda(this.agendaIndex)
  // })};

    addToAgenda(newEvent: any) {
     this.plans.push(newEvent);
     console.log(this.plans);
  }

  //  onSubmit (activity: Activity){
  //   const newActivity = new Activity(activity.name);
  //   this.plan = newActivity;
  //   this.kyotoSitesService.addEvent(this.plan);
  // }
    onSubmit () {
    this.submitted.emit(this.plan);
  }

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
