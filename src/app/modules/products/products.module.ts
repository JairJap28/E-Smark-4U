import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
