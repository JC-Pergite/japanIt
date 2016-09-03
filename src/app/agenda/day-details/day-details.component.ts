// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from "@angular/router";
// import { AgendaService } from '../agenda.service';
// import { AgendaListComponent } from '../agenda-list/agenda-list.component';
// import { Agenda } from '../../shared/agenda';

// @Component({
//   moduleId: module.id,
//   selector: 'ore-no-day-details',
//   templateUrl: 'day-details.component.html',
//   directives: [ ROUTER_DIRECTIVES, AgendaListComponent ],
//   providers: [ AgendaService ]
// })

// export class DayDetailsComponent implements OnInit, OnDestroy {

//   selectedAgenda: Agenda;
//   private agendaIndex: number;
//   private sub: any;
//   agendas: Agenda[];

//   constructor(private route: ActivatedRoute, 
//               private router: Router, 
//               private agendaService: AgendaService) {}

//   ngOnInit() {
//     this.sub = this.route.params.subscribe(params => {
//       this.agendaIndex = +params['id'];
//       this.selectedAgenda = this.agendaService.getAgenda(this.agendaIndex);
//     });
//   }

//   onEdit() {
//     this.router.navigate(['/agenda', this.agendaIndex , '/edit']);
//   }

//   onDelete() {
//     this.agendaService.deleteAgenda(this.selectedAgenda);
//     this.router.navigate(['/agenda']);
//   }

//    ngOnDestroy() {
//     this.sub.unsubscribe();
//   }
// }