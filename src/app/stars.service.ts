import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class StarsService {
  starwar: Array<any>;

  constructor(private _http: Http) {
    this.starwar = [];
   }

  getAllCurrent(){
    return this.starwar;
  }
  
  getStarWar(cb){ 
    var rand = Math.floor(Math.random()*86)+1;
    this._http.get(`https://swapi.co/api/people/${rand}`).subscribe((res)=>{
      this.starwar.push(res.json())
      cb()
    });
    
    
  }

}
