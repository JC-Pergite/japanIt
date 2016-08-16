import { RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto.component';
import { KyotoSitesComponent } from './kyoto-sites.component';
import { CurrentPlanComponent } from '../agenda/current-plan/current-plan.component';
import { KyotoStartComponent } from './kyoto-start.component';


export const KyotoRoutes: RouterConfig = [ 

			{ path: '', redirectTo: '/kyoto', pathMatch: 'full' },
			{ path: 'kyoto', component: KyotoComponent, 
				children: 
					[
						{ path: ':id', component: KyotoSitesComponent },
						{ path: ':id/dayplan', component: KyotoSitesComponent },
						{ path: 'dayplan/:id', component: CurrentPlanComponent },
						{ path: '', component: KyotoStartComponent }
					] 
			}
];