import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { AppComponent }           from './app.component';

import { WeatherItemComponent }   from "./weather/weather-item.component";
import { WeatherListComponent }   from "./weather/weather-list.component";
import { WeatherSearchComponent } from "./weather/weather-search.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
