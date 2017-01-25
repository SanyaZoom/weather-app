import { Component, Input, OnInit } from "@angular/core";
import { HourlyDayItems }           from "./hourly-day-items.interface";
import * as moment                  from 'moment';

@Component({
    selector: 'element',
    template: `
        <div *ngFor="let list of lists">
            <ul class="list-group">
                <li class="row list-group-item">
                    <div class="col-xl-1 col-lg-2 col-md-2 col-sm-4 col-xs-6" style="margin-top: 4%;">
                        <h5>{{ list.time }}</h5>    
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-8 col-xs-6">
                        <img class="card-img-left" src="src/resources/icon/{{ list.icon }}.png" alt="weather image" 
                        width="100" height="100">  
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <h3>{{ list.temp }}°C <span style="font-style: italic">{{ list.description }}</span></h3>         
                        <p>{{ list.temp_max }}...{{ list.temp_min }}°C, {{ list.humidity }}%, {{ list.pressure }}hpa, {{ list.wind_speed }}m/s {{ list.wind_deg }}</p>
                    </div> 
                </li>
            </ul>   
        </div>
    `
})
export class ElementComponent implements OnInit {
    @Input('rowArr') hourlyDayItem: any;
    @Input('day') day: any;

    private arr: any[] = [];
    private time: any;
    private lists: HourlyDayItems[] = [];

    ngOnInit() {
        this.arr = this.hourlyDayItem[0];
        for (let i = 0; i < this.hourlyDayItem[0].length; i++) {
            this.time = moment(this.arr[i].time).format("DD MMM YYYY");
            if(this.time === this.day) {
                this.arr[i].temp = this.arr[i].temp.toFixed(1);
                this.arr[i].temp_max = this.arr[i].temp_max.toFixed(1);
                this.arr[i].temp_min = this.arr[i].temp_min.toFixed(1);
                this.arr[i].time = this.arr[i].time.substr(this.arr[i].time.length - 9);
                this.arr[i].time = this.arr[i].time.substr(0, this.arr[i].time.length - 3);
                this.lists.push(this.arr[i]);
            }
        }
    }
}