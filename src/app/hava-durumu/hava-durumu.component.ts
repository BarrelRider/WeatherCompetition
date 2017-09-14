import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../assets/providers/weather.service';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-hava-durumu',
  templateUrl: './hava-durumu.component.html',
  styleUrls: ['./hava-durumu.component.css']
})
export class HavaDurumuComponent implements OnInit {

  private cityParams : any
  private apikey : string

  public weatherOfCity : any;

  constructor(urlParams: ActivatedRoute,private weatherService:WeatherService) {
    this.cityParams = urlParams.snapshot.params['sehir'];
    this.apikey = '41da5b01c486fa153803b8e19f73f76f';
  }

  ngOnInit() : void {
    this.weatherService.getWeather(this.cityParams,this.apikey)
    .subscribe(
      (response:Response) =>{
        let data = response.json();
        console.log(data);
        this.weatherOfCity = {
          aciklama : data.weather[0].description,
          enDusuk : data.main.temp_min,
          enYuksek : data.main.temp_max,
          basinc : data.main.pressure,
          nem : data.main.humidity,
          ruzgar : data.wind.speed,
          ulke: data.sys.country
        }
      },
      (error) => {
        console.log("Hata... ",error)
      }
    )
  } 
}
