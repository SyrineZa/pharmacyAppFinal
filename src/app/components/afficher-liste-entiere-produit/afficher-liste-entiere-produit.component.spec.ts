import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherListeEntiereProduitComponent } from './afficher-liste-entiere-produit.component';

describe('AfficherListeEntiereProduitComponent', () => {
  let component: AfficherListeEntiereProduitComponent;
  let fixture: ComponentFixture<AfficherListeEntiereProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherListeEntiereProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherListeEntiereProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
