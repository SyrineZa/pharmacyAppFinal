import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/classes/facture';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.css']
})
export class AjouterFactureComponent implements OnInit {
  constructor(private facservice:FactureService,private router :Router) { }

  fac:Facture=new Facture();

  ngOnInit(): void {

  }

  public ajouterFacture(fac:Facture)
  {
    this.facservice.ajouterFacture(fac);
  }
onAnnulerClick(){
  this.router.navigateByUrl('/authentification');
}

}
