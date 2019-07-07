import {SubCategory} from './sub-category'


export class Product {

	id: number;
	name: string;
	desc: string;
	prices: string;
	imgUrl: string;
	subCateg : SubCategory;

	Product(object) {
		this.id = object.id
		this.name = object.name
		this.desc = object.desc
		this.prices = object.prices
		this.imgUrl = object.imgUrl
		this.subCateg = object.subCategory
	}



}
