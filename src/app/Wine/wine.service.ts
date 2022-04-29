import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Wine } from './wine';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WineService {

  private apiServerUrl = environment.apiBaseUrl;

  //in the constructor we make HttpClient because later we want that client
  //to call the api from spring boot app that will give us all the employees
  constructor(private http: HttpClient) { }


  //get all wines
  public getWines(): Observable<Wine[]>{
    const  data  =  this.http.get<Wine[]>(`${this.apiServerUrl}/wines/all`);
    return data;
  }

  //add wine
  public addWine(wine: Wine): Observable<Wine>{
    return this.http.post<Wine>(`${this.apiServerUrl}/wines/add`,wine);
  }

  //update wine
  public updateWine(wine: Wine): Observable<Wine>{
    return this.http.put<Wine>(`${this.apiServerUrl}/wines/update`,wine);
  }

  //delete wine
  public deleteWine(wineId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/wines/delete/${wineId}`);
  }




}
