import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { GererproduitComponent } from './components/gererproduit/gererproduit.component';
import { ModifierproduitComponent } from './components/modifierproduit/modifierproduit.component';
import { ConsulterproduitficheproduitComponent } from './components/consulterproduitficheproduit/consulterproduitficheproduit.component';
import { AfficherListeEntiereProduitComponent } from './components/afficher-liste-entiere-produit/afficher-liste-entiere-produit.component';
import { AfficherlisteProduitFamilleComponent } from './components/afficherliste-produit-famille/afficherliste-produit-famille.component';
import { AfficherlisteProduitFournisseurComponent } from './components/afficherliste-produit-fournisseur/afficherliste-produit-fournisseur.component';
import { AfficherlisteProduitLaboratoireComponent } from './components/afficherliste-produit-laboratoire/afficherliste-produit-laboratoire.component';
import { GererFournisseurComponent } from './components/gerer-fournisseur/gerer-fournisseur.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { SupprimerFournisseurComponent } from './components/supprimer-fournisseur/supprimer-fournisseur.component';
import { ModifierFournisseurComponent } from './components/modifier-fournisseur/modifier-fournisseur.component';
import { ConsulterFournisseurComponent } from './components/consulter-fournisseur/consulter-fournisseur.component';
import { GererLaboratoireComponent } from './components/gerer-laboratoire/gerer-laboratoire.component';
import { AjouterLaboratoireComponent } from './components/ajouter-laboratoire/ajouter-laboratoire.component';
import { SupprimerLaboratoireComponent } from './components/supprimer-laboratoire/supprimer-laboratoire.component';
import { ModifierLaboratoireComponent } from './components/modifier-laboratoire/modifier-laboratoire.component';
import { ListeLaboratoireComponent } from './components/liste-laboratoire/liste-laboratoire.component';
import { GererFamilleComponent } from './components/gerer-famille/gerer-famille.component';
import { AjouterFamilleComponent } from './components/ajouter-famille/ajouter-famille.component';
import { ModifierFamilleComponent } from './components/modifier-famille/modifier-famille.component';
import { AjouterFactureComponent } from './components/ajouter-facture/ajouter-facture.component';


const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent},
  {   path: 'gererproduit', component: GererproduitComponent  }, 
  {   path: 'addpro', component: AddProComponent  }, 
  {   path: 'modifierproduit', component: ModifierproduitComponent  }, 
  {   path: 'consulterproduitficheproduit', component: ConsulterproduitficheproduitComponent }, 
  {   path: 'afficherlisteentiereproduit', component: AfficherListeEntiereProduitComponent }, 
  {   path: 'afficherlisteproduitfamille', component: AfficherlisteProduitFamilleComponent },
  {   path: 'afficherlisteproduitfournisseur', component: AfficherlisteProduitFournisseurComponent }, 
  {   path: 'afficherlisteproduitlaboratoire', component: AfficherlisteProduitLaboratoireComponent }, 
  {   path: 'gererfournisseur', component: GererFournisseurComponent }, 
  {   path: 'ajouterfournisseur', component: AjouterFournisseurComponent }, 
  {   path: 'supprimerfournisseur', component: SupprimerFournisseurComponent },
  {   path: 'modifierfournisseur', component: ModifierFournisseurComponent }, 
  {   path: 'consulterfournisseur', component: ConsulterFournisseurComponent }, 
  {   path: 'gererlaboratoire', component: GererLaboratoireComponent }, 
  {   path: 'ajouterlaboratoire', component: AjouterLaboratoireComponent }, 
  {   path: 'supprimerlaboratoire', component: SupprimerLaboratoireComponent }, 
  {   path: 'modifierlaboratoire', component: ModifierLaboratoireComponent }, 
  {   path: 'listelaboratoire', component: ListeLaboratoireComponent }, 
  {   path: 'gererfamille', component: GererFamilleComponent }, 
  {   path: 'modifierfamille', component: ModifierFamilleComponent }, 
  {   path: 'ajouterfamille', component: AjouterFamilleComponent }, 
  {   path: 'ajouterfacture', component: AjouterFactureComponent }, 










 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
