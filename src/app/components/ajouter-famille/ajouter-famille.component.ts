import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Famille } from 'src/app/classes/famille';
import { FamilleService } from 'src/app/services/famille.service';

@Component({
  selector: 'app-ajouter-famille',
  templateUrl: './ajouter-famille.component.html',
  styleUrls: ['./ajouter-famille.component.css']
})
export class AjouterFamilleComponent implements OnInit {

  constructor(private famservice:FamilleService,private router :Router) { }

  fam:Famille=new Famille();

  ngOnInit(): void {

  }

  public ajouterFamille(fam:Famille)
  {
    this.famservice.ajouterFamille(fam);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererfamille');
}

}
