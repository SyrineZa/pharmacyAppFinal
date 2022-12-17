import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficherliste-produit-fournisseur',
  templateUrl: './afficherliste-produit-fournisseur.component.html',
  styleUrls: ['./afficherliste-produit-fournisseur.component.css']
})

export class AfficherlisteProduitFournisseurComponent implements OnInit {
  Id_fournisseur:any;
  
constructor (private produitservice : ProduitService ,private router:Router){}

ngOnInit(): void {}
  public listeProduitFournisseur(Id_fournisseur : number){
     this.produitservice.listeProduitFournisseur(Id_fournisseur);
  }

onAnnulerClick(){
  this.router.navigateByUrl('/gererproduit');
}
}
