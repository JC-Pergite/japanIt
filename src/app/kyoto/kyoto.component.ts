import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { KyotoListComponent } from './sites-list/kyoto-list.component';
import { Event } from '../shared/event';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent ],
  providers: [ KyotoSitesService ]
})
export class KyotoComponent implements OnInit {
	events: Event[];
	
  constructor(private router: Router, private kyotoSitesService: KyotoSitesService) {}

  // onSelect(event: Event) {
  // 	this.router.navigate(['/kyoto', event.id]);
  // }

  ngOnInit() {
  		this.events = this.kyotoSitesService.getSites();
  }

}
