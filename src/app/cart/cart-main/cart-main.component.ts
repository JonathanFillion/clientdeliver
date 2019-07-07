import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../classes/cart-item';
import { CartManagerService } from '../../services/cart-manager/cart-manager.service';
import { Product } from '../../classes/product';
import {HttpService} from '../../http.service';
import { CartDisplayerLineComponent} from '../cart-displayer-line/cart-displayer-line.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';


@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {

  cartArray : CartItem[] = [];

  constructor(private httpService : HttpService, private cartService : CartManagerService) { }

  ngOnInit() {
  	this.cartArray = this.cartService.getCartItems();
  }

}
