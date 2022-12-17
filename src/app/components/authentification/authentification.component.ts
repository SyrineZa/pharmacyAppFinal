import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  onLoginClick(){
  
  this.router.navigateByUrl('/home');
  }
  }
