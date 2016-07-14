import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { Event } from '../../shared/event';


@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto-item',
  templateUrl: 'kyoto-item.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class KyotoItemComponent {
  @Input() event: Event; 
  @Input() eventId: number;
}