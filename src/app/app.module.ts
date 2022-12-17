import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { GererproduitComponent } from './components/gererproduit/gererproduit.component';
import { GererFournisseurComponent } from './components/gerer-fournisseur/gerer-fournisseur.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModifierproduitComponent } from './components/modifierproduit/modifierproduit.component';
import { ConsulterproduitficheproduitComponent } from './components/consulterproduitficheproduit/consulterproduitficheproduit.component';
import { AfficherListeEntiereProduitComponent } from './components/afficher-liste-entiere-produit/afficher-liste-entiere-produit.component';
import { AfficherlisteProduitFamilleComponent } from './components/afficherliste-produit-famille/afficherliste-produit-famille.component';
import { AfficherlisteProduitFournisseurComponent } from './components/afficherliste-produit-fournisseur/afficherliste-produit-fournisseur.component';
import { AfficherlisteProduitLaboratoireComponent } from './components/afficherliste-produit-laboratoire/afficherliste-produit-laboratoire.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { SupprimerFournisseurComponent } from './components/supprimer-fournisseur/supprimer-fournisseur.component';
import { ModifierFournisseurComponent } from './components/modifier-fournisseur/modifier-fournisseur.component';
import { ConsulterFournisseurComponent } from './components/consulter-fournisseur/consulter-fournisseur.component';
import { GererLaboratoireComponent } from './components/gerer-laboratoire/gerer-laboratoire.component';
import { AjouterLaboratoireComponent } from './components/ajouter-laboratoire/ajouter-laboratoire.component';
import { ModifierLaboratoireComponent } from './components/modifier-laboratoire/modifier-laboratoire.component';
import { SupprimerLaboratoireComponent } from './components/supprimer-laboratoire/supprimer-laboratoire.component';
import { ListeLaboratoireComponent } from './components/liste-laboratoire/liste-laboratoire.component';
import { GererFamilleComponent } from './components/gerer-famille/gerer-famille.component';
import { AjouterFamilleComponent } from './components/ajouter-famille/ajouter-famille.component';
import { ModifierFamilleComponent } from './components/modifier-famille/modifier-famille.component';
import { AjouterFactureComponent } from './components/ajouter-facture/ajouter-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    GererproduitComponent,
    GererFournisseurComponent,
    AddProComponent,
    ModifierproduitComponent,
    ConsulterproduitficheproduitComponent,
    AfficherListeEntiereProduitComponent,
    AfficherlisteProduitFamilleComponent,
    AfficherlisteProduitFournisseurComponent,
    AfficherlisteProduitLaboratoireComponent,
    AjouterFournisseurComponent,
    SupprimerFournisseurComponent,
    ModifierFournisseurComponent,
    ConsulterFournisseurComponent,
    GererLaboratoireComponent,
    AjouterLaboratoireComponent,
    ModifierLaboratoireComponent,
    SupprimerLaboratoireComponent,
    ListeLaboratoireComponent,
    GererFamilleComponent,
    AjouterFamilleComponent,
    ModifierFamilleComponent,
    AjouterFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
