import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../../shared/event';
import { KyotoSitesService } from '../../kyoto/kyoto-sites.service';
import { AgendaService } from '../../agenda/agenda.service';
import { Agenda } from '../../shared/agenda';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Activity } from "../../shared/activity"; 
import { AgendaComponent } from "../agenda.component";
import { AgendaListComponent } from '../agenda-list/agenda-list.component';
import { KyotoSitesComponent} from '../../kyoto/kyoto-sites.component';
import { KyotoComponent } from '../../kyoto/kyoto.component';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { EditDay } from '../../edit-day';





@Component({
  moduleId: module.id,
  selector: 'ore-no-current-plan',
  templateUrl: 'current-plan.component.html',
  // styleUrls: ['current-plan.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent, KyotoSitesComponent ],
  providers: [ KyotoSitesService, AgendaService ]
})
export class CurrentPlanComponent implements OnInit, OnDestroy {
  // agenda: Observable<Agenda>;
  // id: Observable<string>;
  selectedAgenda: Agenda;
  private agendaIndex: number;
  private sub: any;
  plans: Activity[] = [];
  agendas: Agenda[];
  days: Array<EditDay<Agenda>>;

  // Output(): selectedAgenda;


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {

    // this.agenda = route.data.map(d => d.agenda);
    // this.id = route.params.map(p => p.id);
    // const s: ActivatedRouteSnapshot = route.snapshot;
    // s.data['agenda'];
    this.days = agendaService.getAgendas().map(day => new EditDay(day));
  }


   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.agendaIndex = params['id'];
      this.selectedAgenda = this.agendaService.getAgenda(this.agendaIndex);
      this.selectedAgenda.id = this.agendaIndex.toString();

      this.plans = this.agendaService.getPlans();
    }); 
  }
 

   onEdit() {
    this.router.navigate(['/agenda', this.agendaIndex , '/edit']);
  }

  onDelete() {
    this.agendaService.deleteAgenda(this.selectedAgenda);
    this.router.navigate(['/agenda']);
  }

  onSaved(editDay: EditDay<Agenda>, updated: Agenda) {
    // console.log(this.oldDays);
    console.log(updated);
    editDay.day = updated;
        console.log(this.selectedAgenda);

    console.log(editDay);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}