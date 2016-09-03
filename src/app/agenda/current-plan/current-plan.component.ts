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



@Component({
  moduleId: module.id,
  selector: 'ore-no-current-plan',
  templateUrl: 'current-plan.component.html',
  // styleUrls: ['current-plan.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent, KyotoComponent, KyotoSitesComponent ],
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
  oldDays: Array<any>;

  // Output(): selectedAgenda;


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService) {

    // this.agenda = route.data.map(d => d.agenda);
    // this.id = route.params.map(p => p.id);
    // const s: ActivatedRouteSnapshot = route.snapshot;
    // s.data['agenda'];
  }


   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.agendaIndex = params['id'];
      this.selectedAgenda = this.agendaService.getAgenda(this.agendaIndex);
      this.selectedAgenda.id = this.agendaIndex.toString();

      this.plans = this.agendaService.getPlans();
    });
           this.oldDays = this.agendaService.setOg(this.selectedAgenda);

       console.log(this.oldDays);
 
  }
 

   onEdit() {
    this.router.navigate(['/agenda', this.agendaIndex , '/edit']);
  }

  onDelete() {
    this.agendaService.deleteAgenda(this.selectedAgenda);
    this.router.navigate(['/agenda']);
  }

  onSaved(event) {
    console.log(this.oldDays);
    console.log(this.selectedAgenda.activities  );

    console.log(event);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}