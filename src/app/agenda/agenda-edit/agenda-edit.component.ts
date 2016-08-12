import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../../shared/activity';
import { AgendaService } from '../agenda.service';

@Component({
  moduleId: module.id,
  selector: 'ore-no-agenda-edit',
  templateUrl: 'agenda-edit.component.html',
})
export class AgendaEditComponent {
  @Input() plan: Activity; 
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private agendaService: AgendaService) {}

  ngOnChanges(changes) {
    if (changes.plan.currentValue === null) {
      this.isAdd = true;
      this.plan = {name: null, ranking: null, timeOfDay: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(activity: Activity) {
    const newActivity = new Activity(activity.name, activity.ranking, activity.timeOfDay);
    if (!this.isAdd) {
      this.agendaService.editPlan(this.plan, newActivity);
      this.onClear();
    } else {
      this.plan = newActivity;
      this.agendaService.addPlan(this.plan);
    }
  }

  onDelete() {
    this.agendaService.deletePlan(this.plan);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
