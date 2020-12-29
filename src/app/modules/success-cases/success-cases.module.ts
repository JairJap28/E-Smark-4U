import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessCasesComponent } from './success-cases.component';
import { ShortDescriptionPipe } from '../../shared/pipes/short-description.pipe';
import { SharedModule } from '../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SuccessCasesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [SuccessCasesComponent]
})
export class SuccessCasesModule { }
