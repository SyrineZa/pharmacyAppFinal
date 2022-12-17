import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.css']
})
export class AjouterFournisseurComponent {

  constructor(private fservice:FournisseurService,private router:Router) { }

  f:Fournisseur=new Fournisseur();

  ngOnInit(): void {}
   

  

 
onAnnulerClick(){
  this.router.navigateByUrl('/gererfournisseur');
}
public ajouterFournisseur(f:Fournisseur)
{
  this.fservice.ajouterFournisseur(f);
}
}