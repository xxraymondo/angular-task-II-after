import { Component, Input,Output,EventEmitter } from '@angular/core';
import * as quotesData from '../../json/quotes.json';
import { product } from '../../model/products.model'


@Component({
  selector: 'app-single-qoute',
  templateUrl: './single-qoute.component.html',
  styleUrls: ['./single-qoute.component.scss']
})
export class SingleQouteComponent {
@Input() ChildInputProduct!:product
@Output() deleteQuoteEvent = new EventEmitter<product>();

constructor(){
  
 
}
deleteProduct(){
  this.deleteQuoteEvent.emit(this.ChildInputProduct)
  console.log(this.ChildInputProduct)
}
}
