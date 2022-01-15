import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanjeListaComponent } from './stanje-lista.component';

describe('StanjeListaComponent', () => {
  let component: StanjeListaComponent;
  let fixture: ComponentFixture<StanjeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanjeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanjeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
