import { Component, OnInit } from '@angular/core';
import {Wine} from "../Wine/wine";
import {WineService} from "../Wine/wine.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  title = 'wine-e-shop-frontend';
  public wines: Wine[]=[];

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.getWines();
    console.log("wines list = " + this.wines.values());
  }

  // THIS FUNCTION IS CALLED IN THE ngOnInit()
  public getWines(): void{
    this.wineService.getWines().subscribe(
      //ako gi zemit stavi gi vo employees
      (response:Wine[]) =>{
        this.wines=response;
        console.log("wines are " + this.wines[0].name);

      },
      //ako imat nekakov error prikazi error alert
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
