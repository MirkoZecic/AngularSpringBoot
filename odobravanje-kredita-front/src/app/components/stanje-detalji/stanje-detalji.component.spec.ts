import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanjeDetaljiComponent } from './stanje-detalji.component';

describe('StanjeDetaljiComponent', () => {
  let component: StanjeDetaljiComponent;
  let fixture: ComponentFixture<StanjeDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanjeDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanjeDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
