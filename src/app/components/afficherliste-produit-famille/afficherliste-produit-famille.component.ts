import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficherliste-produit-famille',
  templateUrl: './afficherliste-produit-famille.component.html',
  styleUrls: ['./afficherliste-produit-famille.component.css']
})

export class AfficherlisteProduitFamilleComponent implements OnInit {
  Id:any;
  
constructor (private produitservice : ProduitService ,private router:Router){}

ngOnInit(): void {}
  public listeProduitCategorie(Id : number){
     this.produitservice.listeProduitCategorie(Id);
  }

onAnnulerClick(){
  this.router.navigateByUrl('/gererproduit');
}
}
