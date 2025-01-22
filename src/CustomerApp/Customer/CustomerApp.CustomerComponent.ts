import { Component } from '@angular/core';
import { Customer } from "./CustomerApp.CustomerModel"
@Component({
  //selector: 'myapp-root',
  standalone: false,
  templateUrl: './CustomerApp.CustomerView.html'
})

export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clears the fiels in the UI
  }
}


/* export  class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
}

 */