import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLaboratoireComponent } from './liste-laboratoire.component';

describe('ListeLaboratoireComponent', () => {
  let component: ListeLaboratoireComponent;
  let fixture: ComponentFixture<ListeLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
