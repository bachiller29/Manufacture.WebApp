import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-create',
  templateUrl: './inventory-create.component.html',
  styleUrls: ['./inventory-create.component.css']
})
export class InventoryCreateComponent implements OnInit {

  inventory: Inventory = new Inventory();
  submitted = false;

  
  constructor(private inventoryService: InventoryService,
    private router: Router) { }

    ngOnInit() {
    }

    newProduct(): void {
      this.submitted = false;
      this.inventory = new Inventory();
    }

    save() {
      this.inventoryService
      .createInventory(this.inventory).subscribe(data => {
        console.log(data)
        this.inventory = new Inventory();
        this.gotoList();
      }, 
      error => console.log(error));
    }

    onSubmit() {
      this.submitted = true;
      this.save();    
    }

    gotoList() {
      this.router.navigate(['/inventory']);
    }
}
