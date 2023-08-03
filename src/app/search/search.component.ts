import { Component } from '@angular/core';
import * as productData from '../json/products.json'
import * as userData from '../json/users.json'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  products =productData
  users =userData
  foundData!:any // ask about it why any
  foundNumberData!:any
  constructor(){

    this.products = Object.values(this.products)
    this.users = Object.values(this.users)
  }
  sendit(bindedTwoWays:string) {
  this.foundData =  this.users.find(user => user.firstName.toLowerCase() == bindedTwoWays.toLowerCase()||user.maidenName.toLowerCase() == bindedTwoWays.toLowerCase()|| user.lastName.toLowerCase() == bindedTwoWays.toLowerCase())
    console.log(this.foundData)
  }
  number(bindedTwoWays:string) {
    console.log(bindedTwoWays)
    this.foundNumberData =  this.users.find(user => user.phone.replace(" ", "") == bindedTwoWays.replace(" ", ""))
      console.log(this.foundNumberData)
    }
}
