import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajStanjeComponent } from './dodaj-stanje.component';

describe('DodajStanjeComponent', () => {
  let component: DodajStanjeComponent;
  let fixture: ComponentFixture<DodajStanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajStanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajStanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
