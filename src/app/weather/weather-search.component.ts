import { Component, OnInit }     from '@angular/core';
import { WeatherService }        from "./weather.service";
import { WeatherItem }           from "./weather-item";
import { Subject }               from 'rxjs/Subject';
import { WeatherItemForFewDays } from "./weather-itemForFewDays";

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <div class="row">
                <form (ngSubmit)="onSubmit()">                    
                    <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2" style="margin-top: 1%;">
                        <label for="city">City</label>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-10 col-sm-10 col-xs-10" style="margin-top: 1%;">
                        <input type="text" class="form-control" id="city" [(ngModel)]="location" style="width: 100%;" 
                            [ngModelOptions]="{standalone: true}" (input)="onSearchLocation(input.value)" required #input>
                    </div>
                    <div class="offset-xl-0 col-xl-2 offset-lg-0 col-lg-2 offset-md-2 col-md-4 offset-sm-2 col-sm-4 offset-xs-0 col-xs-12" style="margin-top: 1%;">
                        <button type="submit" class="btn btn-success" style="width: 100%;">Add city</button>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12" style="margin-top: 1%;">    
                        <button type="button" class="btn btn-danger" (click)="removeList()" style="width: 100%;">Delete search</button>
                    </div>                        
                </form>
            </div>
            <div style="margin-top: 1%;">
                <span class="info">City found:</span> {{data.name}}
            </div>
        </section>      
    `
})
export class WeatherSearchComponent implements OnInit {
    public location: string = '';
    private searchStream = new Subject<string>();
    data: any = {};
    datas: any = {};

    constructor(private _weatherService: WeatherService) {
    }

    onSubmit() {
        const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description.toUpperCase(),
            this.data.main.temp, this.data.wind.speed, this.data.wind.deg, this.data.main.humidity,
            this.data.main.pressure, this.data.sys.country, this.data.coord.lat, this.data.coord.lon, this.data.weather[0].icon);
        this._weatherService.addWeatherItem(weatherItem);
        const weatherItemForFewDay = new WeatherItemForFewDays(this.datas.city.name, this.datas.city.country, this.datas.city.coord.lat,
            this.datas.city.coord.lon, this.datas.list);
        this._weatherService.addHourlyWeatherItem(weatherItemForFewDay);
    }

    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }

    ngOnInit(): any {
        this.searchStream
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((input: string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => {
                    this.data = data;
                }
            );

        this.searchStream
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((input: string) => this._weatherService.searchWeatherDataForFewDays(input))
            .subscribe(
                data => {
                    this.datas = data;
                    console.log(this.datas);
                }
            );
    }

    removeList() {
        this._weatherService.clearWeatherItems();
        this._weatherService.clearHourlyWeatherItems();
    }
}