import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFamilleComponent } from './ajouter-famille.component';

describe('AjouterFamilleComponent', () => {
  let component: AjouterFamilleComponent;
  let fixture: ComponentFixture<AjouterFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
