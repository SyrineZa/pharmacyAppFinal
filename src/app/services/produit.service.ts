import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  public ListeProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>('http://localhost:8080/Produit/GetAllProd');
  }
  public ajouterProduit(p:Produit):void{
    this.http.post('http://localhost:8080/Produit/AddProd',{lib_prd:p.Lib_prd,description_prd:p.Description_prd,prix_prd:p.Prix_prd,dateAjout_prd: p.DateAjout_prd,prix_Livr: p.Prix_Livr}).subscribe(data=>{console.log(data)});;
} 

  public modiferProduit(p: Produit, id : number):void {
    this.http.put('http://localhost:8080/Produit/updateProd/'+id ,{lib_prd:p.Lib_prd,description_prd:p.Description_prd,prix_prd:p.Prix_prd,dateAjout_prd: p.DateAjout_prd,prix_Livr: p.Prix_Livr}).subscribe(data=>{console.log(data)});
} 
  public consulterFicheProduit(Id_prd: number):Observable<any>{
   return this.http.get(`${'http://localhost:8080/Produit/GetByIdProd/'}/${Id_prd}`);
}
  public listeProduitFournisseur(Id_fournisseur : number):Observable<Produit[]>{
   return this.http.get<Produit[]>('http://localhost:8080/Produit/GetAllProdByFour/'+Id_fournisseur);
}
  public listeProduitMarque(Id:number):Observable<Produit[]>{
   return this.http.get<Produit[]>('http://localhost:8080/Produit/GetAllProdByCat/'+Id);
}
  public listeProduitCategorie(Id:number):Observable<Produit[]>{
   return this.http.get<Produit[]>('http://localhost:8080/Produit/GetAllProdByLabo/'+Id);
}
}
