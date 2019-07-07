import { Injectable } from '@angular/core';
import { CartItem } from '../../classes/cart-item';
import { HttpService } from '../../http.service';
import { EventEmitter } from '@angular/core';
import { Product } from '../../classes/product';



@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

	savedProducts : CartItem[] = [];

  constructor(private httpService : HttpService) { }


  addCartItem( qty: number, productId: number) {
    this.removeDuplicates(productId);
    this.httpService.getProductById(productId).subscribe((data : Product) => {
      var item : CartItem = {quantity: qty, product: data};
      this.savedProducts.push(item);
    });
  }

  removeCartItem(id: number, alrt: boolean) {
    let indexToRem = []
    for(let i = 0; i < this.savedProducts.length; i++){
      if(this.savedProducts[i].product.id == id){
        indexToRem.push(i)
      }
    }

    for(let i = indexToRem.length - 1 ; i >= 0; i--){
      this.savedProducts.splice(indexToRem[i], 1)
    }

  }

  removeDuplicates(id: number) {
    this.removeCartItem(id, true)
  }


  getCartItems() : CartItem[] {
    return this.savedProducts;
  }


}
