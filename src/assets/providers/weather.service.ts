import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class WeatherService {
    constructor(private http: Http) {}

    getWeather(q:String,APPID:string) {
        return this.http
        .get('http://api.openweathermap.org/data/2.5/weather?q='+q+'&APPID='+APPID)
    }
}

