import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage  {


  public data: any[] =[];

  constructor( private service: ApisService) { }

  uni(value: any){

    this.service.getUni(value).subscribe((datos: any) =>{
      this.data = datos;
      alert(this.data);

    });
}
}
