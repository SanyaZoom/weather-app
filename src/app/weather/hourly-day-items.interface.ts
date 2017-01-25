export class HourlyDayItems {
    constructor(
        public time: string,
        public humidity: number,
        public pressure: number,
        public temp: number,
        public temp_max: number,
        public temp_min: number,
        public description: string,
        public icon: string,
        public wind_deg: number,
        public wind_speed: number
    ){}
}