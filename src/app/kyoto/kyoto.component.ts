import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ore-no-kyoto',
  templateUrl: 'kyoto.component.html',
  styleUrls: ['kyoto.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class KyotoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
