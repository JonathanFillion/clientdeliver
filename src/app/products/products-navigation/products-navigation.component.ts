import { Component, OnInit,OnChanges, Output, EventEmitter, Input  } from '@angular/core';
import {HttpService} from '../../http.service';
import { Category } from '../../classes/category';
import { SubCategory } from '../../classes/sub-category';

@Component({
  selector: 'app-products-navigation',
  templateUrl: './products-navigation.component.html',
  styleUrls: ['./products-navigation.component.css']
})
export class ProductsNavigationComponent implements OnInit, OnChanges {

	filter: number = -1;
	subCategories : SubCategory[];
	@Output() newFilter = new EventEmitter<number>();
  @Input() categoryId: number;

  constructor(private httpService : HttpService) {
  }

  ngOnInit() {
  	this.httpService.getSubCategoriesOfCategory(this.categoryId).subscribe((data : SubCategory[]) => {
      this.subCategories = data;
    });
  }

  ngOnChanges() {
   this.httpService.getSubCategoriesOfCategory(this.categoryId).subscribe((data : SubCategory[]) => {
      this.subCategories = data;
    });
  }

  triggerFilter(catId : number) {
    this.filter = catId;
  	this.newFilter.emit(catId);
  }

}
