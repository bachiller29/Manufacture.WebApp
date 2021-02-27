import { Inventory } from '../inventory';
import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-inventory-in',
  templateUrl: './inventory-in.component.html',
  styleUrls: ['./inventory-in.component.css']
})
export class InventoryInComponent implements OnInit {

  id: number;
  inventory: Inventory;
  quantity: number;
  alert:boolean;
  message:string;

  constructor(private route: ActivatedRoute,private router: Router,
    private inventoryService: InventoryService) { }

    ngOnInit() {
      this.inventory = new Inventory();
  
      this.id = this.route.snapshot.params['id'];
      this.quantity =0 ;
      this.alert = false;
      this.message="";
      this.inventoryService.getinventory(this.id)
        .subscribe(data => {
          console.log(data);
          debugger
          this.inventory = data;
        }, error => console.log(error));
    }

    list(){
      this.router.navigate(['inventorys']);
    }


    guardar(){
      if(this.quantity<1){
        console.log('valor invalido')
        this.alert = true;
        this.message = "El valor de entrada deber ser superior a 1";
      }else{
        this.alert = false;
        this.message = "";
        this.inventory.quantity = this.inventory.quantity  + this.quantity;

        if(this.inventory.quantity>0){
          this.inventory.stateProduc = "Unidades disponibles";
        }
        this.inventoryService.updateInventory(this.inventory.inventoryId, this.inventory).subscribe(data=>{
          
          this.router.navigate(['inventory']);
        }, error => console.log(error));
        
      }
    }
}
