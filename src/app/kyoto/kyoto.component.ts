import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
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
	events : Event[];

  // constructor(private _kyotoSitesService: KyotoSitesService) {
  // 	this.events = _kyotoSitesService.getAllSites()
  // }

  constructor(private _router: Router, private _kyotoService: KyotoService) {}

  onSelect(event: Event) {
  	this._router.navigate(['/kyoto', kyoto.id]);
  }


  ngOnInit() {

  }

}
