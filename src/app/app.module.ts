import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { LayoutModule } from './shared/layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    //LayoutModule,
    SharedModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
