import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AgendaService } from './agenda.service';
import { Agenda } from '../shared/agenda';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ResolveAgendasResolver implements Resolve<any> {
	constructor(private agendaService: AgendaService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Agenda[]> {
			return this.agendaService.getAgenda(route.params['id']);
		}
}