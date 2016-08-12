import { RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto.component';
import { KyotoSitesComponent } from './kyoto-sites.component';
import { CurrentPlanComponent } from '../agenda/current-plan/current-plan.component';
import { KyotoStartComponent } from './kyoto-start.component';

// export const KyotoRoutes: RouterConfig = [
// 	// { path: '', component: KyotoStartComponent, 
// 	// 	children: [
// 			// { path: 'kyoto', component: KyotoComponent },
// 			{ path: ':id', component: KyotoSitesComponent,
// 				children: [
// 					{ path: ':id/day', component: CurrentPlanComponent }
// 				]
// 			},
// 			{ path: '', component: KyotoStartComponent }

// 		// ]
// 	// }
// ];

export const KyotoRoutes: RouterConfig = [
	// { path: '', component: KyotoStartComponent, 
	// 	children: [
			// { path: 'kyoto', component: KyotoComponent },
			// { path: ':id', component: CurrentPlanComponent },
			{ path: ':id', component: KyotoSitesComponent },
			{ path: '', component: KyotoStartComponent }

		// ]
	// }
];
