import { RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto.component';
import { KyotoSitesComponent } from './kyoto-sites.component';
import { CurrentPlanComponent } from '../agenda/current-plan/current-plan.component';
import { KyotoStartComponent } from './kyoto-start.component';
import { AgendaComponent}  from '../agenda/agenda.component';


export const KyotoRoutes: RouterConfig = [ 

			{ path: ':kyoto', children: 
					[
						{ path: '', component: KyotoComponent },
						{ path: ':id', component: KyotoSitesComponent }
					] 
			}
];


