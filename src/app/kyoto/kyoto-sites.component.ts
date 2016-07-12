import { Component, OnInit, OnDestroy   } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event';
import { KyotoSitesService } from './kyoto-sites.service';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-sites',
  template: `
    <p>
      kyoto-sites Works!
    </p>
  `,
  styleUrls: ['kyoto-sites.component.css']
})
export class KyotoSitesComponent implements OnInit {

  private subscr: any;

  constructor(private _route: ActivatedRoute, private _router: Router, 
                private _kyotoService: KyotoService) {}

  ngOnInit() {
    this.subscr = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getSite(id).then(event => this.event = event);
    });
  }

  ngOnDestroy() {
    this.subcr.unsubscribe();
  }

}
