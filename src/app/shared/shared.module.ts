import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SafePipe } from './pipes/safe.pipe';




@NgModule({
  declarations: [ShortDescriptionPipe, SafePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  exports: [ShortDescriptionPipe, SafePipe]
})
export class SharedModule { }
