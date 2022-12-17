import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.css']
})
export class ModifierFournisseurComponent {
  constructor(private fservice:FournisseurService,private router :Router) { }

  fournisseur :Fournisseur =new Fournisseur();
  id :any;

  ngOnInit(): void {

  }

  public modiferFournisseur(fournisseur:Fournisseur,id:number)
  {
    this.fservice.modiferFournisseur(fournisseur,id);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererfournisseur');
}
}
