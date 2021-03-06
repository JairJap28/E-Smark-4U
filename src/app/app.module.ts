import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './modules/home/home.module';
import { ContactModule } from './modules/contact/contact.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { ProductsModule } from './modules/products/products.module';
import { SuccessCasesModule } from './modules/success-cases/success-cases.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginModule } from './modules/login/login.module';
import { StatsModule } from './modules/stats/stats.module';


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
    LoginModule,
    StatsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
