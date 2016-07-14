import { RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto.component';
import { KyotoSitesComponent } from './kyoto-sites.component';

export const KyotoRoutes: RouterConfig = [
	{ path: '', component: KyotoComponent },
	{ path: 'kyoto', component: KyotoComponent },
	{ path: 'kyoto/:id', component: KyotoSitesComponent }
];
// export const KyotoRoutes: RouterConfig = [
// 	// { path: '', redirectTo: '/kyoto', pathMatch: 'full' },
// 	{ path: 'kyoto', component: KyotoComponent,
// 		children: [
// 			{ path: ':id', component: KyotoSitesComponent }
// 		] 
// 	}
// ];