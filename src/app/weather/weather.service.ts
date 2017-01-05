import { Injectable }     from '@angular/core';
import { WEATHER_ITEMS }  from "./weather.data";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { WeatherItem }    from "./weather-item";

@Injectable()
export class WeatherService {
    constructor (private _http: Http) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
            '&APPID=e11e642be7e972aa694d00e6c8186eeb&units=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}