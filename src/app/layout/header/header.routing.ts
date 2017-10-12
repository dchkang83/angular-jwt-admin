import { Routes } from '@angular/router';

import { HeaderComponent } from './header.component';

export const LayoutHeaderRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header',

    /*
    data: {
      translation: {
        domain: 'layout',
        common: true,
      },
    },
    */
  },
  //{ path: 'header',  component : HeaderComponent },
  /*{ path: 'header',  component : HeaderComponent },*/
  /*
  { path: 'header',  component : HeaderComponent, outlet: 'header' },
  */

];
