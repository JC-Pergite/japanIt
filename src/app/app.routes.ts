import { provideRouter, RouterConfig } from '@angular/router';
import { KyotoComponent } from './kyoto/kyoto.component';
import { TokyoComponent } from './tokyo/tokyo.component';

export const routes: RouterConfig = [
	{ path: 'kyoto', component: KyotoComponent },
	{ path: 'tokyo', component: TokyoComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
