import { Component, OnInit } from '@angular/core';
import { StarsService} from './../stars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  starwar: Array<any>
  constructor(private _starsService: StarsService) {
    this.starwar = [];
   }

  getAllCurrent(){
    this.starwar = this._starsService.getAllCurrent();
  }

  getStarWar(){
    this._starsService.getStarWar(()=>{
      this.getAllCurrent();
      console.log(this.starwar)
    })
  }
  ngOnInit() {
  }

}
