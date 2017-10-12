import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHeaderRoutes, LayoutSidenavRoutes, LayoutFooterRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutHeaderRoutes,
      ...LayoutSidenavRoutes,
      ...LayoutFooterRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
