import { Component } from '@angular/core';
import { Customer } from "./CustomerApp.model"
@Component({
  selector: 'myapp-root',
  templateUrl: './CustomerApp.view.html'
})

export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel : Customer = new Customer();
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