import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libro3Component } from './libro3.component';

describe('Libro3Component', () => {
  let component: Libro3Component;
  let fixture: ComponentFixture<Libro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libro3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Libro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
