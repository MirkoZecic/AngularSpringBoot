import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKlijentaComponent } from './dodaj-klijenta.component';

describe('DodajKlijentaComponent', () => {
  let component: DodajKlijentaComponent;
  let fixture: ComponentFixture<DodajKlijentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajKlijentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajKlijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
