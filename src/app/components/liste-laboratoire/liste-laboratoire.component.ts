import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratoire } from 'src/app/classes/laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-liste-laboratoire',
  templateUrl: './liste-laboratoire.component.html',
  styleUrls: ['./liste-laboratoire.component.css']
})

export class ListeLaboratoireComponent implements OnInit {
 
  
constructor (private laboratoireservice : LaboratoireService ,private router:Router){}
labos :any;
ngOnInit(): void {
  

 this.labos= this.ListeLaboratoire();
 console.log('aa',this.labos)

}
fourn : any;
  public ListeLaboratoire(){
    this.fourn=this.laboratoireservice.ListeLaboratoire().subscribe(data=>{console.log(data)});
    console.log(this.fourn);
  }

}
