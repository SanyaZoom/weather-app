import { Component, OnInit } from '@angular/core';
import { WeatherService }    from "./weather.service";
import { WeatherItem }       from "./weather-item";
import { Subject }           from 'rxjs/Subject';

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form (ngSubmit)="onSubmit()">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" [(ngModel)]="location" [ngModelOptions]="{standalone: true}" (input)="onSearchLocation(input.value)" required #input>
                <button type="submit" class="btn btn-default">Add city</button>
            </form>
            <div>
                <span class="info">City found:</span> {{data.name}}
            </div>
        </section>               
    `
})
export class WeatherSearchComponent implements OnInit {
    public location: string = '';
    private searchStream = new Subject<string>();
    data: any = {};

    constructor(private _weatherService: WeatherService) {}

    onSubmit() {
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description.toUpperCase(), this.data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
    }

    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }

    ngOnInit():any {
        this.searchStream
            .debounceTime(700)
            .distinctUntilChanged()
            .switchMap((input: string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => this.data = data
            );
    }
}