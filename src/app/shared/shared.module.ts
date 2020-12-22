import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShortDescriptionPipe } from './pipes/short-description.pipe';




@NgModule({
  declarations: [ShortDescriptionPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ShortDescriptionPipe]
})
export class SharedModule { }
