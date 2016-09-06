import { provideRouter, RouterConfig, Resolve } from '@angular/router';
import { AgendaEditComponent } from './agenda/agenda-edit/agenda-edit.component';
import { CurrentPlanComponent } from './agenda/current-plan/current-plan.component';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { AgendaComponent}  from './agenda/agenda.component';
import { TokyoRoutes } from './tokyo/tokyo.routes';
// import { ResolveAgendasResolver}  from './agenda/resolveAgendas.resolver';





export const APP_ROUTER_PROVIDERS: any[] = [
  provideRouter([
          { path: '', pathMatch: 'full', redirectTo: '/agenda'},

      { path: ':agenda', children: [
            { path: '', component: AgendaComponent },
            { path: 'new', component: AgendaEditComponent },
            { path: ':id', component: CurrentPlanComponent },
                  { path: ':id', component: CurrentPlanComponent, children: [...KyotoRoutes]} , 
      ],
                   },      
    ])
];

