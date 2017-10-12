import { Routes } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

export const LayoutSidenavRoutes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    outlet: 'sidenav',

    /*
    data: {
      translation: {
        domain: 'layout',
        common: true,
      },
    },
    */
  },
  //{ path: 'sidenav',  component : SidenavComponent },
  /*{ path: 'sidenav',  component : SidenavComponent },*/
  /*
  { path: 'sidenav',  component : SidenavComponent, outlet: 'sidenav' },
  */

];
