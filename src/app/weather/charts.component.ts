import { Component, OnInit }     from "@angular/core";
import { WeatherItemForFewDays } from "./weather-itemForFewDays";

@Component({
    selector: 'charts',
    template: `
        <p>Test</p>
    `,
    inputs: ['weatherItemHourly: hourlyItem']
})
export class ChartComponent implements OnInit {
    private weatherItemHourly: WeatherItemForFewDays;
    private lists: any[] = [];

    ngOnInit() {
        this.lists = this.weatherItemHourly.list;
        console.log(this.lists);
    }
}