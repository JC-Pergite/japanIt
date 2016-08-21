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
  selectedEvent: Event;
  private eventIndex: number;
  private sub: any;
  plans: Activity[] = [];
  @Input() selectedAgenda: Agenda;
  @Output() saved = new EventEmitter();

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
    const newActivity = new Activity(newEvent, null, null);
    this.selectedAgenda.activities.push(newActivity);
    console.log(this.selectedAgenda);

  }

    onSaved(event) {
      console.log(event);
      this.saved.emit({value: this.selectedAgenda});
    }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}