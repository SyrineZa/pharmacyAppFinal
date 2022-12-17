import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-gerer-laboratoire',
  templateUrl: './gerer-laboratoire.component.html',
  styleUrls: ['./gerer-laboratoire.component.css']
})

export class GererLaboratoireComponent implements OnInit {
  constructor(private router:Router,private lservice : LaboratoireService){}
  ngOnInit(): void {
    
  }

  onAjouterClick(){
  
  this.router.navigateByUrl('/ajouterlaboratoire');
  }

  onModifierClick(){

    this.router.navigateByUrl('/modifierlaboratoire');

  }
  onListeClick(){
    this.router.navigateByUrl('/listelaboratoire');
  }
  onSupprimerClick(){
    this.router.navigateByUrl('/supprimerlaboratoire');
  }
}
