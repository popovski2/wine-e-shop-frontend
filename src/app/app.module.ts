import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { WinesComponent } from './wines/wines.component';
import {WineService} from "./Wine/wine.service";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieDataService} from "./pie-data.service";

@NgModule({
  declarations: [
    AppComponent,
    WinesComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WineService, PieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
