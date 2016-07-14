import { Injectable } from '@angular/core';
import { Event } from '../shared/event';

@Injectable()
export class KyotoSitesService {
  private events: Event[] = [
      new Event('Fushini Inari', 'Arguably the best.', '', '', []),
      new Event('Ginkakuji', 'Gold standard', '', '', []),
      new Event('Kinkakuji', 'No silver, but the garden is great', '', '', [])
    ];
	
  constructor() {}

   getSites() {
    return this.events;
  }

  getSite(id: number | string) {
  	return this.events[id];
  }

}
