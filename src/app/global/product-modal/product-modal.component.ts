import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../classes/product';
import { CartItem } from '../../classes/cart-item';
import { CartManagerService } from '../../services/cart-manager/cart-manager.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
	@Input() product : Product; 
	@Output() removeModal = new EventEmitter<any>();
  quantity : number = 1;

  constructor(private cartService : CartManagerService) {
   }

  ngOnInit() {
  }

  clickExit() {
  	this.removeModal.emit()
  }

  orderProduct(){
    this.cartService.addCartItem(this.quantity, this.product.id);
  }

  quantityChange(event: any) {
    this.quantity = event.target.selectedIndex + 1;
  }

}
