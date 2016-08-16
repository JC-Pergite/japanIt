import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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



@Component({
  moduleId: module.id,
  selector: 'ore-no-current-plan',
  templateUrl: 'current-plan.component.html',
  // styleUrls: ['current-plan.component.css'],
  directives: [ ROUTER_DIRECTIVES, AgendaListComponent, KyotoSitesComponent ],
})
export class CurrentPlanComponent implements OnInit, OnDestroy {
  // @Input() day: Agenda;
  selectedAgenda: Agenda;
  private agendaIndex: number;
  private sub: any;
  plans: Activity[] = [];
  agendas: Agenda[];
  selectedPlan: Activity = null;  


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
  //   ngOnInit() {
  //     this.agendas = this.agendaService.getAgendas();
  // }


  //  addToAgenda(newEvent: any) {
  //    this.plans.push(newEvent);
  //    console.log(this.plans);
  // }
  // onAddToAgenda(day: any) {
  //   this.agendaService.addAgendas(day)
  // }

  // onSelectDay(day: Activity) {
  //   this.selectedDay = day;
  // }

   onEdit() {
    this.router.navigate(['/agenda', this.agendaIndex , '/edit']);
  }

  onDelete() {
    this.agendaService.deleteAgenda(this.selectedAgenda);
    this.router.navigate(['/agenda']);
  }

  onSubmitted(activity: Activity) {
    console.log(this.selectedPlan);
    const newActivity = new Activity(activity.name, activity.ranking, activity.timeOfDay);
    this.selectedPlan = newActivity;
    this.selectedAgenda['activities'].push(this.selectedPlan)
    // this.agendaService.addPlans(this.selectedPlan)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { NgForm, NgModel, FORM_DIRECTIVES } from '@angular/forms';
// import { Activity } from '../../shared/activity';
// import { AgendaService } from '../agenda.service';
// import { Agenda } from "../../shared/agenda";
// import { ROUTER_DIRECTIVES } from "@angular/router";
// import { AgendaListComponent } from '../agenda-list/agenda-list.component';



// @Component({
//   moduleId: module.id,
//   selector: 'ore-no-current-plan',
//   templateUrl: 'current-plan.component.html',
//   directives: [ FORM_DIRECTIVES, ROUTER_DIRECTIVES, AgendaListComponent ],
//   providers: [ AgendaService ]
// })
// export class CurrentPlanComponent implements OnChanges {
//   @Input() day: Agenda;
//   @Output() cleared = new EventEmitter();
//   isAdd = true;
//   selectedDay = null;

//   constructor(private agendaService: AgendaService) {}

//   ngOnChanges(changes) {
//     if (changes.day.currentValue === null) {
//       this.isAdd = true;
//       this.day = {name: null, activities: null};
//     } else {
//       this.isAdd = false;
//     }
//   }

//   onSubmit(agenda: Agenda) {
//     const newAgenda = new Agenda(agenda.name, agenda.activities['name']);
//     if (!this.isAdd) {
//       this.agendaService.editAgenda(this.day, newAgenda);
//       this.onClear();
//     } else {
//       this.day = newAgenda;
//       console.log(this.selectedDay)
//       this.agendaService.addAgendas(this.selectedDay);
//     }
//   }

//     onSelect(day: Agenda) {
//     this.selectedDay = day;
//   }


//   onDelete() {
//     this.agendaService.deleteAgenda(this.day);
//     this.onClear();
//   }

//   onClear() {
//     this.isAdd = true;
//     this.cleared.emit(null);
//   }

// }

