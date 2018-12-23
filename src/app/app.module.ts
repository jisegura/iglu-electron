import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './service/http-interceptors/index';
import { HshpMenuComponent } from './component/hshp-menu/hshp-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HshpMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
