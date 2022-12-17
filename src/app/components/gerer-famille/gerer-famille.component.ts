import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilleService } from 'src/app/services/famille.service';

@Component({
  selector: 'app-gerer-famille',
  templateUrl: './gerer-famille.component.html',
  styleUrls: ['./gerer-famille.component.css']
})

export class GererFamilleComponent implements OnInit {
  constructor(private router:Router,private famservice : FamilleService){}
  ngOnInit(): void {
    
  }

  onAjouterClick(){
  
  this.router.navigateByUrl('/ajouterfamille');
  }

  onModifierClick(){

    this.router.navigateByUrl('/modifierfamille');

  }
  onListeClick(){
    this.router.navigateByUrl('/listefamille');
  }
  onSupprimerClick(){
    this.router.navigateByUrl('/supprimerfamille');
  }
}
