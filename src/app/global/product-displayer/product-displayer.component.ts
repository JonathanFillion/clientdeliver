import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../classes/product';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import {HttpService } from '../../http.service';


@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent implements OnInit {

  @Input() productArray : Product[];
  @Input() title: String;
  displayModal : boolean;
  selectedProduct : Product;

  constructor(private httpService : HttpService) { 
    this.displayModal = false;
  }

  ngOnInit() {
  }


  clickProduct (id: number) {
    this.httpService.getProductById(id).subscribe((data : Product) => {
      this.selectedProduct = data;
      this.displayModal = true;
    });
  }

  removeModal() {
  	this.displayModal = false;
  }

}
