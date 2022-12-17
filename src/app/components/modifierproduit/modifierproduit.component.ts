import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent {
  
  constructor (private produitservice : ProduitService ,private router:Router){}
  produit :Produit =new Produit();
  id :any;
  ngOnInit(): void {

  }
  
    public modifierProduit(produit : Produit ,id : number){
      this.produitservice.modiferProduit(produit, id);
   }
 
  onAnnulerClick(){
    this.router.navigateByUrl('/gererproduit');
  }
}
