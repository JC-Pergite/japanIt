import { RouterConfig } from '@angular/router';
import { KyotoStartComponent } from './kyoto-start.component';
import { KyotoSitesComponent } from './kyoto-sites.component';

export const KyotoRoutes: RouterConfig = [
	{ path: '', component: KyotoStartComponent },
	{ path: ':id', component: KyotoSitesComponent }
];
