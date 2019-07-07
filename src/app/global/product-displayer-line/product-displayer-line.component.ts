import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../classes/product';
import { CartItem } from '../../classes/cart-item';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import { CartManagerService } from '../../services/cart-manager/cart-manager.service';

@Component({
  selector: 'app-product-displayer-line',
  templateUrl: './product-displayer-line.component.html',
  styleUrls: ['./product-displayer-line.component.css']
})
export class ProductDisplayerLineComponent implements OnInit {

  @Input() productArray : Product[];
  quantitySelection : number[] = [];

  constructor(private cartService : CartManagerService) { 
  }

  ngOnInit() {
  }

  orderProduct(id: number, event:any) {
    if(this.quantitySelection[id] == undefined){
      this.quantitySelection[id] = 1;
    }
    this.cartService.addCartItem(this.quantitySelection[id], id);
  }

  quantityChange(id: number, event: any) {
    this.quantitySelection[id] = event.target.selectedIndex + 1;
  }

  
  
}
