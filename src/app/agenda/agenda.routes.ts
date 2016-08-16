import { RouterConfig } from '@angular/router';
import { AgendaStartComponent } from './agenda-start.component';
import { DayDetailsComponent } from './all-agenda-details/day-details.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';

export const AgendaRoutes: RouterConfig = [ 

	{ path: 'new', component: DayDetailsComponent },
	{ path: ':id', component: CurrentPlanComponent },	
	{ path: ':id/edit', component: DayDetailsComponent },
	{ path: '', component: AgendaStartComponent }
];
