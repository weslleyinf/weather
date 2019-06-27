import { IMeassurements } from './i.meassurements';

export interface IObserver {
    update(conditions: IMeassurements): void;
}
