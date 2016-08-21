import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { KyotoListComponent } from './sites-list/kyoto-list.component';
import { Event } from '../shared/event';
import { Agenda } from '../shared/agenda';
// import { AgendaComponent } from '../agenda/agenda.component';
import { AgendaService } from '../agenda/agenda.service';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent ],
  providers: [ KyotoSitesService, AgendaService ]
})
export class KyotoComponent implements OnInit {

  // id: string;
  // private agendaIndex: number;
	events: Event[];
  agendas: Agenda[];
  private sub: any;

	
  constructor(private router: Router, private kyotoSitesService: KyotoSitesService,
              private agendaService: AgendaService, private route: ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   this.agendaIndex = +params['id'];
    //   this.id = this.kyotoSitesService.getSite(this.agendaIndex);
    //   )}
  };

  // onSelect(event: Event) {
  // 	this.router.navigate(['/kyoto', event.id]);
  // }

  ngOnInit() {
  		this.events = this.kyotoSitesService.getSites();
      // this.agendas = this.agendaService.getAgendas(); 

  }

}
