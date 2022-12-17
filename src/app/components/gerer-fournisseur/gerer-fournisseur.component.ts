import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-gerer-fournisseur',
  templateUrl: './gerer-fournisseur.component.html',
  styleUrls: ['./gerer-fournisseur.component.css']
})
export class GererFournisseurComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  onAjouterClick(){
  
  this.router.navigateByUrl('/ajouterfournisseur');
  }

  onModifierClick(){

    this.router.navigateByUrl('/modifierfournisseur');

  }
  onConsulterClick(){
    this.router.navigateByUrl('/consulterfournisseur');
  }
  onSupprimerClick(){
    this.router.navigateByUrl('/supprimerfournisseur');
  }
}
