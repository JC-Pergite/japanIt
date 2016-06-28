import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ore-no-tokyo',
  templateUrl: 'tokyo.component.html',
  styleUrls: ['tokyo.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TokyoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
