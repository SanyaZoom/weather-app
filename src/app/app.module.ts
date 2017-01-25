import './rxjs-operators';

import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { AppComponent }               from './app.component';
// Components
import { WeatherItemComponent }       from "./weather/weather-item.component";
import { WeatherListComponent }       from "./weather/weather-list.component";
import { WeatherSearchComponent }     from "./weather/weather-search.component";
import { SidebarComponent }           from "./sidebar.component";
import { WeatherItemHourlyComponent } from "./weather/weather-item-hourly.component";
import { ElementComponent }           from "./weather/element.component";
// Service
import { WeatherService }             from "./weather/weather.service";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent,
    WeatherItemHourlyComponent,
    ElementComponent
  ],
  providers:    [ WeatherService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
