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
export class KyotoSitesComponent implements OnInit, OnDestroy {
  selectedEvent: Event;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, 
                private kyotoSitesService: KyotoSitesService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      // this.kyotoSitesService.getSite(id).then(event => this.selectedEvent = event);
          this.selectedEvent = this.kyotoSitesService.getSite(id); 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
