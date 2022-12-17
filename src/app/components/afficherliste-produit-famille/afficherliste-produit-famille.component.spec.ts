import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlisteProduitFamilleComponent } from './afficherliste-produit-famille.component';

describe('AfficherlisteProduitFamilleComponent', () => {
  let component: AfficherlisteProduitFamilleComponent;
  let fixture: ComponentFixture<AfficherlisteProduitFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherlisteProduitFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherlisteProduitFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
