import { Component, OnInit } from '@angular/core';
import { WeatherItem }       from "./weather-item";
import { WEATHER_ITEMS }     from "./weather.data";
import { WeatherService }    from "./weather.service";

@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </section>
    `,
    providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService) {}

    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();

    }
}