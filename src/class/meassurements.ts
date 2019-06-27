import { IMeassurements } from '../app/interface/i.meassurements';

export class Meassurements implements IMeassurements {
    temperature: number;
    humidity: number;
    pressure: number;

    constructor(
            temperature: number,
            humidity: number,
            pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }

    set(data: IMeassurements): void {
        const keys = Object.keys(data);
        keys.forEach(x => { this[x] = data[x]; });
    }
}
