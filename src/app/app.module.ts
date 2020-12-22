import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './modules/home/home.module';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { SuccessCasesComponent } from './modules/success-cases/success-cases.component';
import { ContactModule } from './modules/contact/contact.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { ProductsModule } from './modules/products/products.module';
import { SuccessCasesModule } from './modules/success-cases/success-cases.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutUsModule,
    ProductsModule,
    SuccessCasesModule,
    ContactModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
