import { Injectable } from '@angular/core';
import { Product } from './classes/product';
import { Category } from './classes/category';
import { SubCategory } from './classes/sub-category';

import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap, debounceTime } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }
	products : Product[]

	url : String = "http://localhost:8080"

	categories : Category[] = [{name:"Topsoil", id:0},{name:"Rock", id:1},{name:"Sand", id:2},{name:"Wood", id:3},{name:"Weed", id:4}];

	subCategories : Category[];

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.url + "/api/products")
	}

	getProductById(id: number): Observable<Product> {
		return this.http.get<Product>(this.url + "/api/products/"+id)
	}

	getProductByCategory(catId: number): Observable<Product[]> {
		return this.http.get<Product[]>(this.url + "/api/products/bysubcateg/"+catId)
	}
	/**/
	getProductsBySearchQuery(sq: string) : Observable<Product[]> {
		return this.http.get<Product[]>(this.url + "/api/products/bysearchquery/"+sq)
	}

	getCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(this.url + "/api/categories");
	}

	getCategory(index: number): Category {
		return this.categories[index]
	}
	/**/
	getSubCategoriesOfCategory(parentId: number) : Observable<SubCategory[]> {
		return this.http.get<SubCategory[]>(this.url + "/api/subcategories/bycateg/"+parentId);
	}


}
