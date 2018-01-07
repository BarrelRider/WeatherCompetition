import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
})

export class AnasayfaComponent {

  urlParams:any;

  protected searchStr:string;
  protected searchData = [
    "Adana","Ankara","Antalya",
    "Bursa","Balıkesir","Bitlis",
    "Denizli","Düzce","Diyarbakır",
    "Edirne","Eskişehir","Erzurum",
    "Istanbul","Izmir","Iğdır",
    "Kocaeli","Karaman","Kahramanmaraş",
    "Manisa","Muğla","Malatya",
    "Podgorica","Budva","Genève",
    "New York","Detroit","California",
    "London","Amsterdam","Berlin"
  ];

  constructor(private router: Router) { }

  goCity(cityStr){
    if(cityStr) {
      return ['/hava-durumu',cityStr];
    }
  }

}
