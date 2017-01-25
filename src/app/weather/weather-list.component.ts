import { Component, OnInit }     from "@angular/core";
import { WeatherItem }           from "./weather-item";
import { WeatherService }        from "./weather.service";
import { WeatherItemForFewDays } from "./weather-itemForFewDays";

@Component({
    selector: 'weather-list',
    template: `
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#viewer" role="tab">Main</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#execute" role="tab">Hourly</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#charts" role="tab">Charts</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade in active" id="viewer" role="tabpanel">
                <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
            </div>
            <div class="tab-pane fade" id="execute" role="tabpanel">
                <weather-item-hourly *ngFor="let weatherItemHourly of weatherItemsHourly" [hourlyItem]="weatherItemHourly"></weather-item-hourly>
            </div>
            <div class="tab-pane fade" id="charts" role="tabpanel">
                <charts *ngFor="let weatherItemHourly of weatherItemsHourly" [hourlyItem]="weatherItemHourly"></charts>
            </div>
        </div>
    `
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];
    weatherItemsHourly: WeatherItemForFewDays[];

    constructor(private _weatherService: WeatherService) {}

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
        this.weatherItemsHourly = this._weatherService.getHourlyWeatherItems();
    }
}