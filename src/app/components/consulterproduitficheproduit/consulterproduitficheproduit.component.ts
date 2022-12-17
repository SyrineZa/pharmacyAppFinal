import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-consulterproduitficheproduit',
  templateUrl: './consulterproduitficheproduit.component.html',
  styleUrls: ['./consulterproduitficheproduit.component.css']
})
export class ConsulterproduitficheproduitComponent implements OnInit {
  Produitform = FormGroup;
  constructor (private produitservice : ProduitService ,private router:Router){}
  p:Produit=new Produit;
  Id_prd:any;
 

  ngOnInit(): void {/*
 this.Produitform=this.Pf.group({ Lib_prd: ['',Validators.required],
 Description_prd: ['',Validators.required],
 Prix_Livr: ['',Validators.required],
 Prix_prd: ['',Validators.required],
 DateAjout_prd: ['',Validators.required],})*/
}
  public consulterFicheProduit(Id_prd: number){
    this.produitservice.consulterFicheProduit(Id_prd)
 }
 onAnnulerClick(){
  this.router.navigateByUrl('/gererproduit');
}
}
