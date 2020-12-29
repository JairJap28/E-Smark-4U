import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
