import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../classes/cart-item';
import { CartManagerService } from '../../services/cart-manager/cart-manager.service';


@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  cartArray: CartItem[];
  cartTotal : number = 0;


  constructor(private cartService : CartManagerService) { }

  ngOnInit() {
    this.cartArray = this.cartService.getCartItems()
  	for(let i = 0 ; i < this.cartArray.length; i++){
  		//this.cartTotal +=  this.cartArray[i].product.prices.split(";")[this.cartArray[i].quantity -1];
  	}

  }

}
