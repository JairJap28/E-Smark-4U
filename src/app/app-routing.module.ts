import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ProductsComponent } from './modules/products/products.component';
import { SuccessCasesComponent } from './modules/success-cases/success-cases.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';
import { StatsComponent } from './modules/stats/stats.component';
import { MyBarChartComponent } from './modules/stats/components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './modules/stats/components/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './modules/stats/components/my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './modules/stats/components/my-radar-chart/my-radar-chart.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Services', component: ProductsComponent },
  { path: 'Cases', component: SuccessCasesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Stats', component: StatsComponent,
    children: [
      {path: 'Stats/bar-chart', component: MyBarChartComponent},
      {path: 'Stats/doughnut-chart', component: MyDoughnutChartComponent},
      {path: 'Stats/radar-chart', component: MyRadarChartComponent},
      {path: 'Stats/pie-chart', component: MyPieChartComponent},
      { path: '**', redirectTo: 'Stats/bar-chart', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
