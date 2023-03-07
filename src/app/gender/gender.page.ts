import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage {
  public data: any[]=[];


  constructor(private service: ApisService) { }

genero(value: any){

this.service.getGenero(value).subscribe((datos: any) =>{
  
  this.data = datos.gender;
});

}

}
