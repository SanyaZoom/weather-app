export class WeatherItem {
    constructor(public cityName: string,
                public description: string,
                public temperature: number,
                public windSpeed: number,
                public windDeg: number,
                public humidity: number,
                public pressure: number,
                public country: string,
                public lat: number,
                public lon: number,
                public icon: string
    ){}
}