import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrganigramComponent } from './organigram/organigram.component';
import { OrgChartModule } from 'ng2-org-chart';



@NgModule({
  declarations: [
    AboutUsComponent,
    CarouselComponent,
    OrganigramComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OrgChartModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
