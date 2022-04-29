import {Component, OnInit} from '@angular/core';
import {Wine} from "./Wine/wine";
import {WineService} from "./Wine/wine.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {IData} from "./pie-data.interface";
import {PieDataService} from "./pie-data.service";
import {PieChartComponent} from "./pie-chart/pie-chart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wine-e-shop-frontend';
  public wines: Wine[]=[];
  public editWine: Wine | undefined;

  public deleteWine: Wine | undefined;

  constructor(private wineService: WineService){}


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

  // FOR THE BUTTONS ON HOME PAGE
  public onAddWine(addForm: NgForm): void {
  //  document.getElementById('add-wine-form').click();
    this.wineService.addWine(addForm.value).subscribe(
      (response: Wine) => {
        console.log(response);
        this.getWines();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateWine(wine: Wine): void {
    this.wineService.updateWine(wine).subscribe(
      (response: Wine) => {
        console.log(response);
        this.getWines();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteWine(wineId: number): void {
    this.wineService.deleteWine(wineId).subscribe(
      (response: void) => {
        console.log(response);
        this.getWines();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public onOpenModal( mode: string,wine?: Wine): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addWineModal');
    }
    if (mode === 'edit') {
      this.editWine = wine;
      button.setAttribute('data-target', '#updateWineModal');
    }
    if (mode === 'delete') {
      this.deleteWine = wine;
      button.setAttribute('data-target', '#deleteWineModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
}
