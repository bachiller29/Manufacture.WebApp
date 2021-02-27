import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryInComponent } from './inventory-in/inventory-in.component';
import { InventoryOutComponent } from './inventory-out/inventory-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductUpdateComponent,
    InventoryCreateComponent,
    InventoryListComponent,
    InventoryInComponent,
    InventoryOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
