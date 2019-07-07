import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ProductDisplayerComponent } from '../../global/product-displayer/product-displayer.component';
import { Product } from '../../classes/product';
import { Category } from '../../classes/category';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';
import { SubCategory } from '../../classes/sub-category';


@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {

	products : Product[];
  temp : Product[];
  categories : Category[] = [null];
  selectedCategory : Category;


  constructor(private httpService : HttpService) {
  }

  ngOnInit() {
    this.getAllCategories()
  }

  getAllProducts() {
    this.httpService.getProducts().subscribe((data : Product[]) => {
      this.products = data;
      this.temp = data;
    });
  }

  getAllCategories() {
    this.httpService.getCategories().subscribe((data : Category[]) => {
      this.categories = this.categories.concat(data);
    });
  }


  setFilter(index: number){
    if(index >= 0){
      let subcategId = index;
      this.products = this.temp.filter(function(elem){
        return elem.subCateg.id == subcategId;
      });
    }
    else if (index == -1) {
      this.products = this.temp;
    }
  }

  setCategory(index: number) {
    this.products = [];
    this.selectedCategory = this.categories[index];
    this.httpService.getSubCategoriesOfCategory(this.selectedCategory.id).subscribe((dataSub : SubCategory[]) => {
        for(var i = 0 ; i < dataSub.length; i++){
          this.httpService.getProductByCategory(dataSub[i].id).subscribe((data : Product[]) => {
            this.addToProducts(data)
          });
        }
    });
  }

  addToProducts(data :Product[]){
    
    this.products = this.products.concat(data)
    this.temp = this.products
  }
}
