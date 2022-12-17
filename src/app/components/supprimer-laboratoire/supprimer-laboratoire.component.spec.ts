import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerLaboratoireComponent } from './supprimer-laboratoire.component';

describe('SupprimerLaboratoireComponent', () => {
  let component: SupprimerLaboratoireComponent;
  let fixture: ComponentFixture<SupprimerLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
