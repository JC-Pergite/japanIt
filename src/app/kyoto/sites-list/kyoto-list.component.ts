import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Event } from '../../shared/event';
import { KyotoItemComponent } from './kyoto-item.component';
import { KyotoSitesService } from '../kyoto-sites.service';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-list',
  templateUrl: 'kyoto-list.component.html',
  directives: [ ROUTER_DIRECTIVES, KyotoItemComponent ],
})
export class KyotoListComponent implements OnInit {
	events: Event[] = [];
	
  constructor(private kyotoSitesService: KyotoSitesService) {}

  ngOnInit() {
  		this.events = this.kyotoSitesService.getSites();
  }

}
