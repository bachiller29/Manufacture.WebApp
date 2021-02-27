import { ProductService } from '../product.service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { Observable } from 'rxjs';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

 

  constructor(private productService: ProductService,
    private router: Router) { 

    }

    ngOnInit() {
      
    }

    newProduct(): void {
      this.submitted = false;
      this.product = new Product();
    }

    save() {
      
      this.productService
      .createProduct(this.product).subscribe(data => {
        console.log(data)
        this.product = new Product();
        this.gotoList();
      }, 
      error => console.log(error));
    }

    onSubmit() {
      this.submitted = true;
      this.save();    
    }

    gotoList() {
      this.router.navigate(['/product']);
    }

    

}
