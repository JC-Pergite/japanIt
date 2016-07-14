import { provideRouter, RouterConfig } from '@angular/router';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { TokyoComponent } from './tokyo/tokyo.component';

export const routes: RouterConfig = [
	...KyotoRoutes,
	{ path: 'tokyo', component: TokyoComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
