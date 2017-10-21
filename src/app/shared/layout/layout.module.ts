import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { FooterModule } from './footer/footer.module';

import { LayoutRoutingModule } from './layout-routing.module';
//import { HeaderModule } from './index';

@NgModule({
  imports: [
    HeaderModule,
    SidenavModule,
    FooterModule,
    LayoutRoutingModule,
  ],
  //declarations: [],
  /*
  exports: [
    HeaderModule
  ],
  */
  exports: [
    //HeaderModule, FooterModule
  ]
})

export class LayoutModule { }
