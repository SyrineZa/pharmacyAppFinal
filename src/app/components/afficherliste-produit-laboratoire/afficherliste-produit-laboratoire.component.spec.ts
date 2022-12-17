import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlisteProduitLaboratoireComponent } from './afficherliste-produit-laboratoire.component';

describe('AfficherlisteProduitLaboratoireComponent', () => {
  let component: AfficherlisteProduitLaboratoireComponent;
  let fixture: ComponentFixture<AfficherlisteProduitLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherlisteProduitLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherlisteProduitLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
