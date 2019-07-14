import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../../classes/category';
import {ApiService} from '../../api.service';


@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {

 filter: number = -1;
	categories : Category[];
	@Output() categorySelected = new EventEmitter<number>();

  constructor(private httpService : ApiService) { 
  	this.httpService.getCategories().subscribe((data : Category[]) => {
      this.categories = data;
    });
  }

  ngOnInit() {
  }

  triggerCategory(index : number) {
    //keep it to play with css class here
    //Return -1 when All is selected
  	this.filter = index;
  	this.categorySelected.emit(index);
  }

}
