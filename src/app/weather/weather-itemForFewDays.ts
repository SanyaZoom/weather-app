export class WeatherItemForFewDays {
    constructor(
        public cityName: string,
        public country: string,
        public lat: number,
        public lon: number,
        public list: any[]
    ){}
}