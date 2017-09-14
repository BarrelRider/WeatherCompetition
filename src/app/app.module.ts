import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Ng2CompleterModule } from "ng2-completer";
import { WeatherService } from '../assets/providers/weather.service'

import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HavaDurumuComponent } from './hava-durumu/hava-durumu.component';

const approute: Routes = [
  {
    path: "",
    component: AnasayfaComponent
  },
  {
    path: "hava-durumu/:sehir",
    component: HavaDurumuComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    HavaDurumuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CompleterModule,
    RouterModule.forRoot(approute)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
