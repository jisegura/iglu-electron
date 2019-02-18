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
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { httpInterceptorProviders } from './service/http-interceptors/index';
import { HshpMenuComponent } from './component/hshp-menu/hshp-menu.component';
import { HshpDividerComponent } from './component/hshp-divider/hshp-divider.component';
import { HshpCustomerSupportComponent } from './component/hshp-customer-support/hshp-customer-support.component';
import { HshpProductsOrderComponent } from './component/hshp-products-order/hshp-products-order.component';
import { HshpProductsCatalogueComponent } from './component/hshp-products-catalogue/hshp-products-catalogue.component';
import { HshpSalesMadeComponent } from './component/hshp-sales-made/hshp-sales-made.component';
import { HshpAdminMenuComponent } from './component/hshp-admin-menu/hshp-admin-menu.component';
import { HshpAdminCategoriaComponent } from './component/hshp-admin-categoria/hshp-admin-categoria.component';
import { HshpAdminCategoriaPostComponent } from './component/hshp-admin-categoria-post/hshp-admin-categoria-post.component';
import { HshpAdminCategoriaPutComponent } from './component/hshp-admin-categoria-put/hshp-admin-categoria-put.component';
import { HshpAdminCategoriaDeleteComponent } from './component/hshp-admin-categoria-delete/hshp-admin-categoria-delete.component';
import { HshpAdminProductoPostComponent } from './component/hshp-admin-producto-post/hshp-admin-producto-post.component';
import { HshpAdminProductoPutComponent } from './component/hshp-admin-producto-put/hshp-admin-producto-put.component';
import { HshpAdminProductoDeleteComponent } from './component/hshp-admin-producto-delete/hshp-admin-producto-delete.component';
import { HshpAdminProductoComponent } from './component/hshp-admin-producto/hshp-admin-producto.component';
import { CurrencyNumberMaskPipe } from './pipe/currency-number-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HshpMenuComponent,
    HshpDividerComponent,
    HshpCustomerSupportComponent,
    HshpProductsOrderComponent,
    HshpProductsCatalogueComponent,
    HshpSalesMadeComponent,
    HshpAdminMenuComponent,
    HshpAdminCategoriaComponent,
    HshpAdminCategoriaPostComponent,
    HshpAdminCategoriaPutComponent,
    HshpAdminCategoriaDeleteComponent,
    HshpAdminProductoPostComponent,
    HshpAdminProductoPutComponent,
    HshpAdminProductoDeleteComponent,
    HshpAdminProductoComponent,
    CurrencyNumberMaskPipe
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
    MatTabsModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders,
    CurrencyNumberMaskPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
