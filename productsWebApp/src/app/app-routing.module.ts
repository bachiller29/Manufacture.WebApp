import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryInComponent } from './inventory-in/inventory-in.component';
import { InventoryOutComponent } from './inventory-out/inventory-out.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: ProductCreateComponent },
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'addInventory', component: InventoryCreateComponent },
  { path: 'inventory', component: InventoryListComponent },
  { path: 'inventoryOut/:id', component: InventoryOutComponent },
  { path: 'inventoryIn/:id', component: InventoryInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
