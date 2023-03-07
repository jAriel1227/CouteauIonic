import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private peticion: HttpClient) {}
  getGenero(gender: string){


   return this.peticion.get(`https://api.genderize.io/?name=${gender}`);

  }
  getUni(name: string){
    if(name.includes(' ')){
      const splitname = name.split(' ');
      name = splitname.join('+');
    }

    return this.peticion.get(`http://universities.hipolabs.com/search?country=${name}`);

   }
   getedad(name: string){


    return this.peticion.get(`https://api.agify.io/?name=${name}`);

   }
   getClima(value: any){
    if(value.includes(' ')){
      const splitname = value.split(' ');
      value = splitname.join('%');
    }

    return this.peticion.get(`http://api.weatherstack.com/current?access_key=5890aee9c3526dd22766acb64a58b0e2&query=${value}`);

   }
}
//http://api.weatherstack.com/current?access_key=5890aee9c3526dd22766acb64a58b0e2&query=New%20York