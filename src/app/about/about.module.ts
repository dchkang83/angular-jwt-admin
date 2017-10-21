import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { MainModule } from './main/main.module';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    //CommonModule
    MainModule,

    AboutRoutingModule
  ],
  declarations: []
})
export class AboutModule { }
