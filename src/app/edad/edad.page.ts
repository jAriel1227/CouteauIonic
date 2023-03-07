import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage  {
  public data: number;
  msm='';


  constructor(private service: ApisService) { }

edad(value: any){

this.service.getedad(value).subscribe((datos: any) =>{
  this.data = datos.age;
  console.log(this.data);

  if (this.data <=39) {
    this.msm=(`Joven`);

  }
  else if (this.data <=40 || this.data <=60) {
    this.msm=(`Adulto`);

  }
  else if (this.data <=61 || this.data <=110) {
    this.msm=(`Viejo`);

  }



});

}


}
