import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererLaboratoireComponent } from './gerer-laboratoire.component';

describe('GererLaboratoireComponent', () => {
  let component: GererLaboratoireComponent;
  let fixture: ComponentFixture<GererLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
