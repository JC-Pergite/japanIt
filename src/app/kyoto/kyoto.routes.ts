import { RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto.component';
import { KyotoSitesComponent } from './kyoto-sites.component';

export const KyotoRoutes: RouterConfig = [
	{ path: 'kyoto', component: KyotoComponent },
	{ path: 'kyoto/:id', component: KyotoSitesComponent }
];
