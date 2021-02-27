
import { Observable } from "rxjs";
import { InventoryService } from "../inventory.service";
import { Inventory } from "../inventory";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventorys: Observable<Inventory[]>;

  constructor(private inventoryService: InventoryService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.inventorys = this.inventoryService.getInventoryList();
      debugger
    }

    deleteProduct(id: number) {
      this.inventoryService.deleteInventory(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    inventoryDetails(InventoryId: number){
      this.router.navigate(['details', InventoryId]);
    }
}
