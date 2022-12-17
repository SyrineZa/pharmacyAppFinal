import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratoire } from 'src/app/classes/laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-supprimer-laboratoire',
  templateUrl: './supprimer-laboratoire.component.html',
  styleUrls: ['./supprimer-laboratoire.component.css']
})
export class SupprimerLaboratoireComponent {
  constructor(private lservice:LaboratoireService,private router :Router) { }
Id:any;
  Labo:Laboratoire=new Laboratoire();

  ngOnInit(): void {

  }

  public supprimerLaboratoire(Id:number)
  {
    this.lservice.supprimerLaboratoire(Id);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererlaboratoire');
}

}
