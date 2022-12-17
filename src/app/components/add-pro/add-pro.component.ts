import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {
  produit :Produit =new Produit();
  
constructor (private produitservice : ProduitService ,private router:Router){}

ngOnInit(): void {}
  prds!:Produit[];

onAnnulerClick(){
  this.router.navigateByUrl('/gererproduit');
}
public ajouterProduit(produit : Produit){
  this.produitservice.ajouterProduit(produit);
}
}