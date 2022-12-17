import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-gererproduit',
  templateUrl: './gererproduit.component.html',
  styleUrls: ['./gererproduit.component.css']
})

export class GererproduitComponent implements OnInit {
  constructor(private router:Router,){}
  ngOnInit(): void {
    
  }
  onAjouterClick(){
  
  this.router.navigateByUrl('/addpro');
  }

  onModifierClick(){

    this.router.navigateByUrl('/modifierproduit');

  }
  onSubmit(){
    this.router.navigateByUrl('/afficherListeEntierProduit');
  }
  onAfficherClick(){
    this.router.navigateByUrl('/afficherlisteentiereproduit');
  }
  onConsulterClick(){
    this.router.navigateByUrl('/consulterproduitficheproduit');
  }
  onAfficherFournisseurClick(){
    this.router.navigateByUrl('/afficherlisteproduitfournisseur');
  }
  onAfficherLaboratoireClick(){
    this.router.navigateByUrl('/afficherlisteproduitlaboratoire');
  }
  onAfficherFamilleClick(){
    this.router.navigateByUrl('/afficherlisteproduitfamille');
  }
  }