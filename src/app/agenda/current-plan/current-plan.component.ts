import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../shared/event';
import { KyotoSitesService } from '../../kyoto/kyoto-sites.service';
import { AgendaService } from '../../agenda/agenda.service';
import { Agenda } from '../../shared/agenda';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Activity } from "../../shared/activity"; 
import { AgendaComponent } from "../../agenda/agenda.component";

@Component({
  moduleId: module.id,
  selector: 'ore-no-current-plan',
  templateUrl: 'current-plan.component.html',
  // styleUrls: ['current-plan.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ AgendaService ]
})
export class CurrentPlanComponent implements OnInit, OnDestroy {
  selectedAgenda: Agenda;
  private agendaIndex: number;
  private sub: any;
  plans: Activity[] = [];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {}


   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.agendaIndex = +params['id'];
      this.selectedAgenda = this.agendaService.getAgenda(this.agendaIndex);
      this.plans = this.agendaService.getPlans();
    });
  }

   addToAgenda(newEvent: any) {
     this.plans.push(newEvent);
     console.log(this.plans);
  }

   onEdit(day: Agenda) {
    this.router.navigate(['/agenda', day.id, '/edit']); //fix
  }

  onDelete() {
    this.agendaService.deleteAgenda(this.selectedAgenda);
    this.router.navigate(['/agenda']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
