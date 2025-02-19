import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
      CustomerComponent, SupplierComponent, MasterPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
