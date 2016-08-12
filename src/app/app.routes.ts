import { provideRouter, RouterConfig } from '@angular/router';
import { AgendaRoutes } from './agenda/agenda.routes';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { TokyoComponent } from './tokyo/tokyo.component';
import { KyotoComponent } from './kyoto/kyoto.component';
import { AgendaComponent}  from './agenda/agenda.component';
import { CurrentPlanComponent } from './agenda/current-plan/current-plan.component';


// export const APP_ROUTER_PROVIDERS = [
//   provideRouter([
//   		{ path: 'current-plan', component: CurrentPlanComponent },	
//   		{ path: '', redirectTo: '/agenda', pathMatch: 'full' },
//   		{ path: 'agenda', component: AgendaComponent, children: AgendaRoutes }
//   	])
// ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter([
  	  	{ path: 'current-plan', component: CurrentPlanComponent },	
  		{ path: '', redirectTo: '/kyoto', pathMatch: 'full' },
  		{ path: 'kyoto', component: KyotoComponent, children: KyotoRoutes },
  		{ path: '', redirectTo: '/agenda', pathMatch: 'full' },
  		{ path: 'agenda', component: AgendaComponent, children: AgendaRoutes }		
  	])
];
