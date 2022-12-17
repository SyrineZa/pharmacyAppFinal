import { Injectable } from '@angular/core';
import { Facture } from '../classes/facture';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }
 
  public ajouterFacture(fac : Facture):void{
    this.http.post('http://localhost:8080/Facture/AddFacture',{date:fac.Date,total_HT:fac.Total_HT,total_TVA:fac.Total_TVA,total_TTC:fac.Total_TTC}).subscribe(data=>{console.log(data)});
} 
}
