import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './components/my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './components/my-pie-chart/my-pie-chart.component';


@NgModule({
  declarations: [StatsComponent, MyBarChartComponent, MyDoughnutChartComponent, MyRadarChartComponent, MyPieChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    AppRoutingModule
  ]
})
export class StatsModule { }
