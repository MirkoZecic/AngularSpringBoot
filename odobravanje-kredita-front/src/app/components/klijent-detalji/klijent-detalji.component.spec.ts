import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentDetaljiComponent } from './klijent-detalji.component';

describe('KlijentDetaljiComponent', () => {
  let component: KlijentDetaljiComponent;
  let fixture: ComponentFixture<KlijentDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
