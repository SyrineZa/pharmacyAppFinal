import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlisteProduitFournisseurComponent } from './afficherliste-produit-fournisseur.component';

describe('AfficherlisteProduitFournisseurComponent', () => {
  let component: AfficherlisteProduitFournisseurComponent;
  let fixture: ComponentFixture<AfficherlisteProduitFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherlisteProduitFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherlisteProduitFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
