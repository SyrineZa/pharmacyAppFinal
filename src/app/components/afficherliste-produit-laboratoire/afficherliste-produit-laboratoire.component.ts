import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficherliste-produit-laboratoire',
  templateUrl: './afficherliste-produit-laboratoire.component.html',
  styleUrls: ['./afficherliste-produit-laboratoire.component.css']
})

export class AfficherlisteProduitLaboratoireComponent implements OnInit {
  Id:any;
  
constructor (private produitservice : ProduitService ,private router:Router){}

ngOnInit(): void {}
  public listeProduitMarque(Id :number){
     this.produitservice.listeProduitMarque(Id);
  }

onAnnulerClick(){
  this.router.navigateByUrl('/gererproduit');
}
}
