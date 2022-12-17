import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererFournisseurComponent } from './gerer-fournisseur.component';

describe('GererFournisseurComponent', () => {
  let component: GererFournisseurComponent;
  let fixture: ComponentFixture<GererFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
