import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { AgendaService } from './app/agenda/agenda.service';
import { ResolveAgendasResolver}  from './app/agenda/resolveAgendas.resolver';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { AppComponent, environment } from './component'; for production

// if (environment.production) {
//   enableProdMode();
// }

bootstrap(AppComponent, [
		ResolveAgendasResolver,
		APP_ROUTER_PROVIDERS, 
		// AgendaService, 
		disableDeprecatedForms(), 
		provideForms()
	])
.catch(err => console.error(err));

