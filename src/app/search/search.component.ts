import { Component } from '@angular/core';
import * as productData from '../json/products.json'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  products =productData
  foundData!:any // ask about it why any
  constructor(){

    this.products = Object.values(this.products)
    console.log(this.products)
  }
  sendit(bindedTwoWays:string) {
  this.foundData =  this.products.find(product => product.title.toLowerCase() == bindedTwoWays.toLowerCase() )
    console.log(this.foundData)
  }
}
