	import { Component, OnInit } from '@angular/core';
	import { ActivatedRoute, Router } from '@angular/router';
	import { ProductDisplayerComponent } from '../../global/product-displayer/product-displayer.component';
	import { Product } from '../../classes/product';
	import {HttpService} from '../../http.service';


	@Component({
		selector: 'app-search-main',
		templateUrl: './search-main.component.html',
		styleUrls: ['./search-main.component.css']
	})
	
	export class SearchMainComponent implements OnInit {

		products : Product[] = [];

		constructor(private httpService : HttpService, private activatedRoute: ActivatedRoute, private router: Router) { 
		}

		ngOnInit() {
			this.httpService.getProductsBySearchQuery(this.activatedRoute.snapshot.params.query).subscribe((data : Product[]) => {
				this.products = data;
			});
		}

	}
