import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficher-liste-entiere-produit',
  templateUrl: './afficher-liste-entiere-produit.component.html',
  styleUrls: ['./afficher-liste-entiere-produit.component.css']
})

export class AfficherListeEntiereProduitComponent implements OnInit {
  produits !: Produit[];
  
constructor (private produitservice : ProduitService ,private router:Router){}

ngOnInit(): void {
  /*this.ListeProduit()*/
  this.produitservice.ListeProduit().subscribe(data=>{this.produits=data;});
}
  public ListeProduit(){
  
  }

}