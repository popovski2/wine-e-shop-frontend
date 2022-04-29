import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { WinesComponent } from './wines/wines.component';
import {WineService} from "./Wine/wine.service";

@NgModule({
  declarations: [
    AppComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
