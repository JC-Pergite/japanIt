import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event';
import { KyotoSitesService } from './kyoto-sites.service';
import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../shared/agenda';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Activity } from "../shared/activity"; 
import { AgendaComponent } from "../agenda/agenda.component";
import { KyotoListComponent } from './sites-list/kyoto-list.component';
import { CurrentPlanComponent } from "../agenda/current-plan/current-plan.component";
import { UpdaterService } from '../updater.service';
import { EditDay } from '../edit-day';

import { map } from 'rxjs/operator/map';
import { switchMap } from 'rxjs/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-sites',
  templateUrl: 'kyoto-sites.component.html',
  styleUrls: ['kyoto-sites.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent ],
  providers: [ KyotoSitesService, UpdaterService ]
})
export class KyotoSitesComponent implements OnInit, OnDestroy {

  selectedEvent: Event = null;
  private eventId: number;
  private sub: any;
  plans: Activity[] = [];
  @Output() saved = new EventEmitter();

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private updaterService: UpdaterService<Agenda>) {}
    @Input() 
    set selectedAgenda (selectedAgenda: Agenda) {
      this.updaterService.setDay(selectedAgenda)
    }

    get selectedAgenda () {
      return this.updaterService.getDay();
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.selectedEvent = this.kyotoSitesService.getSite(this.eventId);
      // this.plans = this.kyotoSitesService.getPlans();
    })
    console.log(this.selectedAgenda)
  };

  // using map rxjs
  // ngOnInit() {
  //   this.sub = this.route.params.map(params => params['id']).subscribe((id) => {
  //     this.kyotoSitesService
  //       .getSite(id).subscribe(selectedEvent => this.selectedEvent = selectedEvent);
  //     this.plans = this.kyotoSitesService.getPlans();
  //   });
  // }

  // ngOnInit() {
  //   this.sub = this.route.params.map(params => +params['id'])
  //   .switchMap(id => this.kyotoSitesService.getSite(id))
  //   .subscribe(selectedEvent => this.selectedEvent = <any>selectedEvent);
  //     this.plans = this.kyotoSitesService.getPlans();
  // }
 

    addToAgenda(newEvent: any) {
          console.log(this.selectedAgenda);
                    console.log(this.selectedEvent);

    console.log(newEvent);

    const newActivity = new Activity(newEvent, null, null);
    this.selectedAgenda.activities.push(newActivity);
    console.log(this.selectedAgenda);

  }

    onSaved() {
          console.log(this.selectedAgenda);

      this.saved.next(this.updaterService.getDay());
    }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}