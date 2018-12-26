import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Materials Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { httpInterceptorProviders } from './service/http-interceptors/index';
import { HshpMenuComponent } from './component/hshp-menu/hshp-menu.component';
import { HshpDividerComponent } from './component/hshp-divider/hshp-divider.component';
import { HshpCustomerSupportComponent } from './component/hshp-customer-support/hshp-customer-support.component';
import { HshpProductsOrderComponent } from './component/hshp-products-order/hshp-products-order.component';
import { HshpProductsCatalogueComponent } from './component/hshp-products-catalogue/hshp-products-catalogue.component';
import { HshpSalesMadeComponent } from './component/hshp-sales-made/hshp-sales-made.component';
import { HshpAdminMenuComponent } from './component/hshp-admin-menu/hshp-admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HshpMenuComponent,
    HshpDividerComponent,
    HshpCustomerSupportComponent,
    HshpProductsOrderComponent,
    HshpProductsCatalogueComponent,
    HshpSalesMadeComponent,
    HshpAdminMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
