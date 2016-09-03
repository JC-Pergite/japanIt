// "use strict";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Event } from '../shared/event';
import { Activity } from "../shared/activity";

@Injectable()
export class KyotoSitesService {

  private plans: Activity[] = [];

  private events: Event[] = [
      new Event('Fushini Inari', 'Arguably the best.', '', ''),
      new Event('Ginkakuji', 'Gold standard', '', ''),
      new Event('Kinkakuji', 'No silver, but the garden is great', '', '')
    ];

  constructor() {}

  getSites() {
    return this.events;
  }

  getSite(id: number | string) {
  	return this.events[id];
  }

   getPlans() {
    return this.plans;
  }
  
}
