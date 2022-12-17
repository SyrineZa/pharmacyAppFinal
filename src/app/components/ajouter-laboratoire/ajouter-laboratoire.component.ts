import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratoire } from 'src/app/classes/laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-ajouter-laboratoire',
  templateUrl: './ajouter-laboratoire.component.html',
  styleUrls: ['./ajouter-laboratoire.component.css']
})
export class AjouterLaboratoireComponent {
  constructor(private lservice:LaboratoireService,private router :Router) { }

  Labo:Laboratoire=new Laboratoire();

  ngOnInit(): void {

  }

  public ajouterLaboratoire(Labo:Laboratoire)
  {
    this.lservice.ajouterLaboratoire(Labo,);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererlaboratoire');
}

}
