import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event';
import { KyotoSitesService } from './kyoto-sites.service';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-sites',
  templateUrl: 'kyoto-sites.component.html',
  styleUrls: ['kyoto-sites.component.css'],
})
export class KyotoSitesComponent implements OnInit, OnDestroy {
  selectedEvent: Event;
  private eventIndex: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, 
                private kyotoSitesService: KyotoSitesService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventIndex = +params['id'];
          this.selectedEvent = this.kyotoSitesService.getSite(this.eventIndex);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
