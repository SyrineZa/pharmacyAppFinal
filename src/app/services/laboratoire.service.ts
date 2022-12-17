import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratoire } from '../classes/laboratoire';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {
  constructor(private http:HttpClient) { }

  public ListeLaboratoire(){
    return this.http.get<Laboratoire[]>('http://localhost:8080/Laboratoire/GetAllLab');
  }
  public ajouterLaboratoire(L :Laboratoire):void{
    this.http.post('http://localhost:8080/Laboratoire/AddLab',{lib_labo:L.Lib_labo}).subscribe(data=>{console.log(data)});
} 
  public supprimerLaboratoire(Id_Labo:Number):void {
    this.http.delete('http://localhost:8080/Laboratoire/deleteLab/'+Id_Labo)/*.subscribe(data=>{console.log(data)})*/;
} 
  public modiferLaboratoire(L: Laboratoire, id : number):void {
    this.http.put('http://localhost:8080/Laboratoire/updateLab/'+id ,{lib_labo:L.Lib_labo}).subscribe(data=>{console.log(data)});
} 
}
