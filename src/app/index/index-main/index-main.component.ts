import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-index-main',
  templateUrl: './index-main.component.html',
  styleUrls: ['./index-main.component.css']
})
export class IndexMainComponent implements OnInit {

	products = [];
  message: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Elit at imperdiet dui accumsan sit amet. Urna nunc id cursus metus aliquam eleifend. Lorem dolor sed viverra ipsum nunc aliquet. At risus viverra adipiscing at. Vel risus commodo viverra maecenas. Diam ut venenatis tellus in. At auctor urna nunc id cursus metus"


  constructor(private httpService: HttpService) {

   }

  ngOnInit() {
   this.httpService.getProducts().subscribe((data : Product[]) => {
      this.products = data.slice(0,3);
    });
  }

}
