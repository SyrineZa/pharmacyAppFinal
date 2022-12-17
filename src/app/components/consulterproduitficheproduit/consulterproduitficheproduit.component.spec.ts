import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterproduitficheproduitComponent } from './consulterproduitficheproduit.component';

describe('ConsulterproduitficheproduitComponent', () => {
  let component: ConsulterproduitficheproduitComponent;
  let fixture: ComponentFixture<ConsulterproduitficheproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterproduitficheproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterproduitficheproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
