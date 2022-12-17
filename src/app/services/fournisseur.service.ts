import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../classes/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) { }

  public consulterFournisseur(Id_Fournisseur:number):Observable<any>{
    return this.http.get(`${'http://localhost:8080/Fournisseur/'}/${Id_Fournisseur}`);
  }
  public ajouterFournisseur(f : Fournisseur):void{
    this.http.post('http://localhost:8080/Fournisseur/AddFrns',{nom_fournisseur:f.Nom_fournisseur,adresse_fournisseur:f.Adresse_fournisseur,email_fournisseur:f.Email_fournisseur,tel_fournisseur: f.Tel_fournisseur}).subscribe(data=>{console.log(data)});
} 
  public supprimerFournisseur(Id_fournisseur:number):void {
    this.http.delete('http://localhost:8080/Fournisseur/deleteFrns/'+Id_fournisseur).subscribe((data)=>{console.log(data)});
} 
  public modiferFournisseur(f: Fournisseur , Id : number):void {
    this.http.put('http://localhost:8080/Fournisseur/updateFrns/'+Id ,{nom_fournisseur:f.Nom_fournisseur,adresse_fournisseur:f.Adresse_fournisseur,email_fournisseur:f.Email_fournisseur,tel_fournisseur: f.Tel_fournisseur}).subscribe(data=>{console.log(data)});
} 
}
