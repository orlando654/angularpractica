import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libro2Component } from './libro2.component';

describe('Libro2Component', () => {
  let component: Libro2Component;
  let fixture: ComponentFixture<Libro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libro2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Libro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
