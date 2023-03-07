import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.page.html',
  styleUrls: ['./locate.page.scss'],
})
export class LocatePage {
  public data: any[] = [];
  location: any;
  clima: any;
  img: any;
  date: any;
  mostrar = false;

  constructor(private service: ApisService) { }
  public pais1: string ="";

  Clima(name: any) {

    this.service.getClima(name).subscribe((value: any) => {

      this.location = value?.location;


      this.data = value;
      this.clima = value.current.weather_descriptions;
      this.img = value.current.weather_icons[0];
      this.date = value.current;


    });

  }



}
