import { RouterConfig } from '@angular/router';
import { AgendaStartComponent } from './agenda-start.component';
import { AgendaComponent } from './agenda.component';
import { DayDetailsComponent } from './all-agenda-details/day-details.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
// import { AgendaEditComponent } from './agenda-edit/agenda-edit.component';

export const AgendaRoutes: RouterConfig = [
	// { path: '', component: AgendaStartComponent },
	// { path: 'agenda', component: AgendaComponent },
	{ path: 'new', component: DayDetailsComponent },
	// { path: ':id', component: DayDetailsComponent },
	{ path: ':id', component: CurrentPlanComponent },	
	{ path: ':id/edit', component: DayDetailsComponent },
	// { path: ':id/edit', component: DayDetailsComponent },
	// { path: ':id/edit', component: AgendaEditComponent },
	{ path: '', component: AgendaStartComponent }
];
