import { Component }   from '@angular/core';
import { WeatherItem } from "./weather-item";

@Component({
    selector: 'weather-item',
    template: `
        <div class="offset-xl-1 col-xl-7 offset-lg-1 col-lg-8 offset-md-0 col-md-11 offset-sm-0 col-sm-12 offset-xs-0 col-xs-12">
            <div class="card" style="margin-top: 1%; width: 100%;">
                <div class="card-block">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h4 class="card-title">{{ weatherItem.cityName }}, {{ weatherItem.country }}</h4>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <p class="card-text">{{ weatherItem.description }}</p>
                        </div>    
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-4 col-xs-12">
                            <img class="card-img-left" src="src/resources/icon/{{ weatherItem.icon }}.png" alt="weather image" 
                                width="100" height="100">
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-7 col-sm-8 col-xs-12">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <p class="card-text">temperature: <span>{{ weatherItem.temperature }} °C</span></p>    
                                </li>
                                <li class="list-group-item">
                                    <p class="card-text">wind: <span>{{ weatherItem.windSpeed }} m/s, {{ weatherItem.windDeg }} deg</span></p>
                                </li>
                                <li class="list-group-item">
                                    <p class="card-text">humidity: <span>{{ weatherItem.humidity }}%</span></p>    
                                </li>
                                <li class="list-group-item">
                                    <p class="card-text">pressure: <span>{{ weatherItem.pressure }} hpa</span></p>
                                </li>
                                <li class="list-group-item">
                                    <p class="card-text">coord: <span>[{{ weatherItem.lat }}, {{ weatherItem.lon }}]</span></p>    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>               
    `,
    inputs: ['weatherItem: item']
})
export class WeatherItemComponent {
    weatherItem: WeatherItem;
}