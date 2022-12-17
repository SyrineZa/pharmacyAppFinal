import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Famille } from 'src/app/classes/famille';
import { FamilleService } from 'src/app/services/famille.service';

@Component({
  selector: 'app-modifier-famille',
  templateUrl: './modifier-famille.component.html',
  styleUrls: ['./modifier-famille.component.css']
})
export class ModifierFamilleComponent implements OnInit {

  constructor(private famservice:FamilleService,private router :Router) { }

  fam :Famille =new Famille();
  id :any;

  ngOnInit(): void {

  }

  public modiferFamille(fam:Famille,id:number)
  {
    this.famservice.modiferFamille(fam,id);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererfamille');
}

}
