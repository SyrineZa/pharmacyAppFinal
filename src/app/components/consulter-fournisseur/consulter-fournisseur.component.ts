import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-consulter-fournisseur',
  templateUrl: './consulter-fournisseur.component.html',
  styleUrls: ['./consulter-fournisseur.component.css']
})
export class ConsulterFournisseurComponent {

  constructor(private fservice:FournisseurService,private router : Router) { }
Id_fournisseur:any;
 

  ngOnInit(): void {

  }

  public consulterFournisseur(Id_fournisseur:number)
  {
    this.fservice.consulterFournisseur(Id_fournisseur);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererfournisseur');
}
}
