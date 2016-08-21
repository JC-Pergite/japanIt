import { RouterConfig } from '@angular/router';
import { TokyoComponent } from './tokyo.component';


export const TokyoRoutes: RouterConfig = [ 

			{ path: ':tokyo', children: 
					[
						{ path: '', component: TokyoComponent },
					] 
			}
]