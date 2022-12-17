import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Famille } from '../classes/famille';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private http:HttpClient) { }

  public ListeFamille():Observable<Famille[]>{
    return this.http.get<Famille[]>('http://localhost:8080/Famille/GetAllFam');
  }
  public ajouterFamille(F : Famille ):void{
    this.http.post('http://localhost:8080/Famille/AddFam',{lib_Famille:F.Lib_Famille}).subscribe(data=>{console.log(data)});
} 
  public supprimerFamille(Id_Famille:Number):void {
    this.http.delete('http://localhost:8080/Famille/deleteFam/'+Id_Famille).subscribe((data)=>{console.log(data)});
} 
  public modiferFamille(Fam: Famille, Id : number):void {
    this.http.put('http://localhost:8080/Famille/updateFam/'+Id ,{lib_Famille:Fam.Lib_Famille}).subscribe(data=>{console.log(data)});
} 
}
