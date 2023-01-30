import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustumersComponent} from "./custumers/custumers.component";
import {BillDetailsComponent} from "./bill-details/bill-details.component";
import {BillsComponent} from "./bills/bills.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  },
  {
    path : "customers", component : CustumersComponent
  },
  {
    path : "bills/:billId",component : BillsComponent
  },
  {
    path : "bill-details/:billId",component : BillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
