import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Materials Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { httpInterceptorProviders } from './service/http-interceptors/index';
import { HshpMenuComponent } from './component/hshp-menu/hshp-menu.component';
import { HshpDividerComponent } from './component/hshp-divider/hshp-divider.component';

@NgModule({
  declarations: [
    AppComponent,
    HshpMenuComponent,
    HshpDividerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
