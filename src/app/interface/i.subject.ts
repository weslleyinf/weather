import { IObserver } from './i.observer';

export interface ISubject {
    register(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;
}
