import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../class/weather-data';
import { CurrentConditionsDisplay } from '../class/current-conditions-display';
import { ForecastDisplay } from '../class/forecast-display';
import { StatisticsDisplay } from '../class/statistics-display';
import { Meassurements } from '../class/meassurements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit(): void {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionsDisplay();
    const forecastDisplay = new ForecastDisplay();
    const statisticsDisplay = new StatisticsDisplay();

    weatherData.register(currentDisplay);
    weatherData.setMeassurements(new Meassurements(90, 60, 31));
    weatherData.setMeassurements(new Meassurements(80, 70, 29));

    weatherData.register(forecastDisplay);
    weatherData.register(statisticsDisplay);
    weatherData.setMeassurements(new Meassurements(78, 68, 29));
  }
}
