import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormGroup, FormControl, Validators, 
          FormBuilder, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { AgendaService } from "../agenda.service";
import { Agenda } from "../../shared/agenda";


@Component({
  moduleId: module.id,
  selector: 'ore-no-day-details',
  templateUrl: 'day-details.component.html',
  styles: [],
  directives: [REACTIVE_FORM_DIRECTIVES]

})
export class DayDetailsComponent implements OnInit, OnDestroy {

  agendaForm: FormGroup;
  private agendaIndex: number;
  private agenda: Agenda;
  private isNew = true;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private agendaService: AgendaService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.agendaIndex = +params['id'];
          this.agenda = this.agendaService.getAgenda(this.agendaIndex);
        } else {
          this.isNew = true;
          this.agenda = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newAgenda = this.agendaForm.value;
    if (this.isNew) {
      this.agendaService.addAgenda(newAgenda);
    } else {
      this.agendaService.editAgenda(this.agenda, newAgenda);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddPlan(name: string, ranking: string, timeOfDay: string) {
    (<FormArray>this.agendaForm.controls['activities']).push(
      new FormGroup({
        name: new FormControl(name), //erased validators required
        ranking: new FormControl(ranking, [
          // Validators.required, erased vr
          Validators.pattern("\\d+")
        ]),
        timeOfDay: new FormControl(timeOfDay) //erased vr
      })
    );
  }

  onRemovePlan(index: number) {
    (<FormArray>this.agendaForm.controls['activities']).removeAt(index);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let dayName = '';
    let agendaActivities: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.agenda.hasOwnProperty('activities')) {
        for (let i = 0; i < this.agenda.activities.length; i++) {
          agendaActivities.push(
            new FormGroup({
              name: new FormControl(this.agenda.activities[i].name),
              ranking: new FormControl(this.agenda.activities[i].ranking, [
                Validators.pattern("\\d+") //erased validators required for all three
              ]),
              timeOfDay: new FormControl(this.agenda.activities[i].timeOfDay)
            })
          );
        }
      }
      dayName = this.agenda.name;
    }
    this.agendaForm = this.formBuilder.group({
      name: [dayName], //erased validators required here too
      activities: agendaActivities
    });
  }
}
