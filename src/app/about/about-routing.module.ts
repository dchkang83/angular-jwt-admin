import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutMainRoutes } from './index';
//import { MainComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...AboutMainRoutes,

      /*
      {
        path: 'about',
        component: MainComponent,
      },
      */
    ])
  ],
  exports: [
    RouterModule,
  ]
})

export class AboutRoutingModule { }
