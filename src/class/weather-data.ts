import { ISubject } from '../app/interface/i.subject';
import { IObserver } from '../app/interface/i.observer';
import { IMeassurements } from '../app/interface/i.meassurements';
import { Meassurements } from './meassurements';

export class WeatherData implements ISubject {
    private meassurements: IMeassurements;
    private observerList: IObserver[];

    constructor( ) {
        this.meassurements = new Meassurements(0, 0, 0);
        this.observerList = [];
    }

    register(observer: IObserver): void {
        if (!this.observerList.includes(observer)) {
            this.observerList.push(observer);
        }
    }

    remove(observer: IObserver): void {
        if (this.observerList.includes(observer)) {
            this.observerList = this.observerList.filter(x => x !== observer);
        }
    }

    notify(): void {
        this.observerList.forEach(x => {
            x.update(this.meassurements);
        });
    }

    setMeassurements(data: IMeassurements): void {
        this.meassurements.set(data);
        this.notify();
    }
}
