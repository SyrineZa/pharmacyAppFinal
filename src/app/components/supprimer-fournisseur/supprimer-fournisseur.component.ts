import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-supprimer-fournisseur',
  templateUrl: './supprimer-fournisseur.component.html',
  styleUrls: ['./supprimer-fournisseur.component.css']
})
export class SupprimerFournisseurComponent {
  constructor(private fservice:FournisseurService,private router : Router) { }
  Id_fournisseur !: number;
  fournisseur !: Fournisseur;
  ngOnInit(): void {

  }

  public supprimerFournisseur(Id_fournisseur:number)
  {
    this.fservice.supprimerFournisseur(Id_fournisseur);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererfournisseur');
}
}