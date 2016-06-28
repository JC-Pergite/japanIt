import { Component } from '@angular/core';
// import { KyotoComponent } from './kyoto/kyoto.component';
// import { TokyoComponent } from './tokyo/tokyo.component';


@Component({
  moduleId: module.id,
  selector: 'oreNo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  // directives: [KyotoComponent, TokyoComponent]
})
export class AppComponent {
  title = 'app works!';
}
