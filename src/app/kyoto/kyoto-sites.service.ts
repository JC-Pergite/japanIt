import { Injectable } from '@angular/core';
import { Event } from '../shared/event';

@Injectable()
export class KyotoSitesService {
	events:Array<any>;

  constructor() {
  	this.events = [
  		{ name: 'Fushini Inari', imageUrl: '', youtube: '', content: 'Arguably the best.' },
  		{ name: 'Ginkakuji', imageUrl: '', youtube: '', content: 'Gold standard' },
  		{ name: 'Kinkakuji', imageUrl: '', youtube: '', content: 'No silver, but the garden is great' }
  	];
  }

  // getAllSites() {
  // 	return this.events
  // }

}
