import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list-component/product-list-component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProductModule { }
