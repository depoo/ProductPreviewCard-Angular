import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductParagraphComponent } from './product-paragraph/product-paragraph.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductParagraphComponent,
    ProductTitleComponent,
    ProductPriceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductParagraphComponent,
    ProductTitleComponent,
    ProductPriceComponent
  ]
})
export class ProductModule { }
