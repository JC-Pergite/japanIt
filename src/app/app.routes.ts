import { provideRouter, RouterConfig } from '@angular/router';
import { KyotoRoutes } from './kyoto/kyoto.routes';
import { TokyoComponent } from './tokyo/tokyo.component';
import { KyotoComponent } from './kyoto/kyoto.component';

export const APP_ROUTER_PROVIDERS = [
  provideRouter([
  		{ path: '', redirectTo: '/kyoto', pathMatch: 'full' },
  		{ path: 'kyoto', component: KyotoComponent, children: KyotoRoutes }
  	])
];
