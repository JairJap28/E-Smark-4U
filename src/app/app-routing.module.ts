import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ProductsComponent } from './modules/products/products.component';
import { SuccessCasesComponent } from './modules/success-cases/success-cases.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Services', component: ProductsComponent },
  { path: 'Cases', component: SuccessCasesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
