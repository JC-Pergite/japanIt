import { provideRouter, RouterConfig } from '@angular/router';
import { AgendaRoutes } from './agenda/agenda.routes';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { TokyoComponent } from './tokyo/tokyo.component';
import { AgendaComponent}  from './agenda/agenda.component';

export const APP_ROUTER_PROVIDERS = [
  provideRouter([
  		{ path: 'agenda', component: AgendaComponent, children: AgendaRoutes },
  		...KyotoRoutes		
  	])
];
