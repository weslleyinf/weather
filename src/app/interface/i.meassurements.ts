export interface IMeassurements {
    temperature: number;
    humidity: number;
    pressure: number;

    set(data: IMeassurements): void;
}
