import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratoire } from 'src/app/classes/laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-modifier-laboratoire',
  templateUrl: './modifier-laboratoire.component.html',
  styleUrls: ['./modifier-laboratoire.component.css']
})
export class ModifierLaboratoireComponent {
  constructor(private lservice:LaboratoireService,private router :Router) { }

  lab :Laboratoire =new Laboratoire();
  id :any;

  ngOnInit(): void {

  }

  public modiferLaboratoire(lab:Laboratoire,id:number)
  {
    this.lservice.modiferLaboratoire(lab,id);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/gererlaboratoire');
}
}
