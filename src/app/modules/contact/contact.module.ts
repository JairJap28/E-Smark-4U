import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [ContactComponent, MapComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ContactComponent, MapComponent]
})
export class ContactModule { }
