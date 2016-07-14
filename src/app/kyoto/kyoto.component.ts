import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { Event } from '../shared/event';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ KyotoSitesService ]
})
export class KyotoComponent implements OnInit {
	events: Event[];
	

  constructor(private router: Router, private kyotoSitesService: KyotoSitesService) {}

  // onSelect(events: Event) {
  // 	this.router.navigate(['/kyoto', events.id]);
  // }


  ngOnInit() {
  		this.events = this.kyotoSitesService.getSites();
  }

}
