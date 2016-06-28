import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
// import { AppComponent, environment } from './component'; for production

// if (environment.production) {
//   enableProdMode();
// }

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]).catch(err => console.error(err));

