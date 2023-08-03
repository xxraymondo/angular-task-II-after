import { Component, Input } from '@angular/core';
import { product } from 'src/app/model/products.model';
import * as productsData from '../../../../src/app/json/products.json';
@Component({
  selector: 'app-all-qoutes',
  templateUrl: './all-qoutes.component.html',
  styleUrls: ['./all-qoutes.component.scss']
})
export class AllQoutesComponent {

products:product[]

constructor(){
  this.products = Object.values(productsData);
}
deleteProduct(event:product){

  this.products= this.products.filter(product => product !== event)

}


}
