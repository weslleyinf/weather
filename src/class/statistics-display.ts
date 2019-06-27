import { IObserver } from '../app/interface/i.observer';
import { IDisplay } from '../app/interface/i.display';
import { IMeassurements } from '../app/interface/i.meassurements';
import { Meassurements } from './meassurements';

export class StatisticsDisplay implements IObserver, IDisplay {
    private meassurements: IMeassurements;

    constructor( ) {
        this.meassurements = new Meassurements(0, 0, 0);
    }

    update(conditions: IMeassurements): void {
        this.meassurements.temperature = conditions.temperature;
        this.meassurements.humidity = conditions.humidity;
        this.display();
    }

    display(): void {
        console.log('Statics: ' + this.meassurements.temperature
                    + 'F degrees and ' + this.meassurements.humidity + '% humidity');
    }
}
