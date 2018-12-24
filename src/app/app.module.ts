import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Materials Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { httpInterceptorProviders } from './service/http-interceptors/index';
import { HshpMenuComponent } from './component/hshp-menu/hshp-menu.component';
import { HshpDividerComponent } from './component/hshp-divider/hshp-divider.component';
import { HshpCustomerSupportComponent } from './component/hshp-customer-support/hshp-customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HshpMenuComponent,
    HshpDividerComponent,
    HshpCustomerSupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
