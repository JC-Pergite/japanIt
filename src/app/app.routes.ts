import { provideRouter, RouterConfig } from '@angular/router';
import { AgendaRoutes } from './agenda/agenda.routes';
import { DayDetailsComponent } from './agenda/all-agenda-details/day-details.component';
import { CurrentPlanComponent } from './agenda/current-plan/current-plan.component';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { AgendaComponent}  from './agenda/agenda.component';
import { TokyoRoutes } from './tokyo/tokyo.routes';


export const APP_ROUTER_PROVIDERS = [
  provideRouter([
  				{ path: '', pathMatch: 'full', redirectTo: '/agenda'},

  		{ path: ':agenda', children: [
  					{ path: '', component: AgendaComponent },
  					{ path: 'new', component: DayDetailsComponent },
  					{ path: ':id', component: CurrentPlanComponent },
  					  		{ path: ':id', component: CurrentPlanComponent, children: [...KyotoRoutes, ...TokyoRoutes]} , 
  		],
  					  		 },  		
  	])
];