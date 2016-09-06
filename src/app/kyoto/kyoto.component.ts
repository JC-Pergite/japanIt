import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { KyotoSitesService } from './kyoto-sites.service';
import { KyotoSitesComponent } from './kyoto-sites.component';
import { KyotoListComponent } from './sites-list/kyoto-list.component';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ ROUTER_DIRECTIVES, KyotoListComponent ],
  providers: [ KyotoSitesService ]
})
export class KyotoComponent {
}
