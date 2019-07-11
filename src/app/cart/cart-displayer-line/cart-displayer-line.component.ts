import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../classes/cart-item';
import { CartManagerService } from '../../services/cart-manager/cart-manager.service';

@Component({
  selector: 'app-cart-displayer-line',
  templateUrl: './cart-displayer-line.component.html',
  styleUrls: ['./cart-displayer-line.component.css']
})
export class CartDisplayerLineComponent implements OnInit {

	@Input() cartArray: CartItem[];

  constructor(private cartService : CartManagerService) { }

  ngOnInit() {
    this.cartArray = this.cartService.getCartItems();
  }

  removeFromCart(id: number){
  	this.cartService.removeCartItem(id, false);
  }

}
