import { provideRouter, RouterConfig, Resolve } from '@angular/router';
import { AgendaRoutes } from './agenda/agenda.routes';
import { DayDetailsComponent } from './agenda/all-agenda-details/day-details.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { CurrentPlanComponent } from './agenda/current-plan/current-plan.component';
import { AgendaStartComponent } from './agenda/agenda-start.component';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { TokyoComponent } from './tokyo/tokyo.component';
import { AgendaComponent}  from './agenda/agenda.component';
import { KyotoComponent}  from './kyoto/kyoto.component';
import { KyotoSitesComponent } from './kyoto/kyoto-sites.component';
import { TokyoRoutes } from './tokyo/tokyo.routes';
// import { ResolveAgendasResolver}  from './agenda/resolveAgendas.resolver';





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




// export const APP_ROUTER_PROVIDERS = [
//   provideRouter([
//   				{ path: '', pathMatch: 'full', redirectTo: '/agenda'},

//   		{ path: ':agenda', children: [
//   					{ path: '', component: AgendaComponent },
//   					{ path: 'new', component: DayDetailsComponent },
//   					{ path: ':id', component: CurrentPlanComponent },
//   					  		{ path: ':id', component: CurrentPlanComponent, children: [
//   					  			// { path: '', component: KyotoComponent },
//   					  			{ path: ':kyoto', children: [
//    					  			{ path: '', component: KyotoComponent },
//   					  			{ path: ':id', component: KyotoSitesComponent }

//   					  			]},
//   					  		]}, 
//   		],
//   					  		 },  		
//   	])
// ];

// export const APP_ROUTER_PROVIDERS = [
//   provideRouter([
//           { path: '', pathMatch: 'full', redirectTo: '/agenda'},

//       { path: ':agenda', children: [
//             { path: '', component: AgendaComponent },
//             { path: 'new', component: DayDetailsComponent },
//             { path: ':id', component: CurrentPlanComponent },
//                   { path: ':id', component: CurrentPlanComponent, children: [...KyotoRoutes, ...TokyoRoutes]} , 
//       ],
//                    },      
//     ])
// ];
