import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererFamilleComponent } from './gerer-famille.component';

describe('GererFamilleComponent', () => {
  let component: GererFamilleComponent;
  let fixture: ComponentFixture<GererFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
