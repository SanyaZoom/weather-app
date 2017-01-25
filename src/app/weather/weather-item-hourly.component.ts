import { Component, OnInit }     from '@angular/core';
import { WeatherItemForFewDays } from "./weather-itemForFewDays";
import { HourlyDayItems }        from "./hourly-day-items.interface";
import * as moment               from 'moment';

@Component({
    selector: 'weather-item-hourly',
    template: `    
    <div *ngFor="let day of dateArr">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card" style="width: 100%; margin-top: 1%;">
                <div class="card-header"> 
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h4 class="card-title">{{ weatherItemHourly.cityName }}, {{ weatherItemHourly.country }}</h4>
                        </div>
                        <div class="offset-xl-3 col-xl-3 offset-lg-3 col-lg-3 offset-md-2 col-md-4 offset-sm-0 col-sm-6 offset-xs-0 col-xs-6">
                            <h4 class="card-title">{{ day }}</h4>   
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <element [rowArr]="rowArr" [day]="day"></element>   
                </div>
            </div>
        </div>        
    </div>
    `,
    inputs: ['weatherItemHourly: hourlyItem']
})
export class WeatherItemHourlyComponent implements OnInit {
    private weatherItemHourly: WeatherItemForFewDays;
    private dates: string[] = [];
    private row: any[] = [];
    private rowArr: any[] = [];
    private dateArr: any[] = [];

    ngOnInit(): any {
        this.getDays();
        for (let j = 0; j < this.dates.length; j++) {
            for (let i = 0; i < this.weatherItemHourly.list.length; i++ ){
                let a = this.weatherItemHourly.list[i].dt_txt.substr(0, this.weatherItemHourly.list[i].dt_txt.length - 9);
                if (this.dates[j] == a) {
                    let array;
                    array = new HourlyDayItems(this.weatherItemHourly.list[i].dt_txt, this.weatherItemHourly.list[i].main.humidity,
                        this.weatherItemHourly.list[i].main.pressure, this.weatherItemHourly.list[i].main.temp, this.weatherItemHourly.list[i].main.temp_max,
                        this.weatherItemHourly.list[i].main.temp_min, this.weatherItemHourly.list[i].weather[0].description, this.weatherItemHourly.list[i].weather[0].icon,
                        this.weatherItemHourly.list[i].wind.deg, this.weatherItemHourly.list[i].wind.speed);
                    this.row.push(array);
                }
            }
            this.dateArr.push(moment(this.dates[j]).format('DD MMM YYYY'));
        }
        this.rowArr.push(this.row);
    }

    private getDays() {
        for (let i = 0; i < this.weatherItemHourly.list.length; i++) {
            if (i === 0) {
                this.dates.push(this.weatherItemHourly.list[i].dt_txt.substr(0, this.weatherItemHourly.list[i].dt_txt.length - 9));
            } else {
                let a = this.weatherItemHourly.list[i].dt_txt.substr(0, this.weatherItemHourly.list[i].dt_txt.length - 9);
                let b = this.weatherItemHourly.list[i - 1].dt_txt.substr(0, this.weatherItemHourly.list[i - 1].dt_txt.length - 9);
                if (a != b) {
                    this.dates.push(a);
                }
            }
        }
    }
}