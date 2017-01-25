import { Injectable }                           from '@angular/core';
import { WEATHER_ITEMS, WEATHER_ITEMS_HOURLY }  from "./weather.data";
import { Http }                                 from '@angular/http';
import { Observable }                           from 'rxjs/Observable';
import { WeatherItem }                          from "./weather-item";
import { WeatherItemForFewDays }                from "./weather-itemForFewDays";

@Injectable()
export class WeatherService {
    constructor (private _http: Http) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    getHourlyWeatherItems() {
        return WEATHER_ITEMS_HOURLY;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    addHourlyWeatherItem(weatherItemForFewDay: WeatherItemForFewDays) {
        WEATHER_ITEMS_HOURLY.push(weatherItemForFewDay);
    }

    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }

    clearHourlyWeatherItems() {
        WEATHER_ITEMS_HOURLY.splice(0);
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

    searchWeatherDataForFewDays(cityName: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName +
            '&mode=json&APPID=e11e642be7e972aa694d00e6c8186eeb&units=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}