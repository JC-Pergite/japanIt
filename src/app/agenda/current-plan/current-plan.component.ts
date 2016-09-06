import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Event } from '../../shared/event';
import { AgendaService } from '../../agenda/agenda.service';
import { Agenda } from '../../shared/agenda';
import { Activity } from "../../shared/activity"; 
import { AgendaComponent } from "../agenda.component";
import { AgendaListComponent } from '../agenda-list/agenda-list.component';
import { KyotoSitesComponent} from '../../kyoto/kyoto-sites.component';
import { EditDay } from '../../edit-day';

@Component({
  moduleId: module.id,
  selector: 'ore-no-current-plan',
  templateUrl: 'current-plan.component.html',
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent, KyotoSitesComponent ],
  providers: [ AgendaService ]
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


  constructor(private route: ActivatedRoute, 
              private router: Router, 
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
     editDay.day = updated;
  }

 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}