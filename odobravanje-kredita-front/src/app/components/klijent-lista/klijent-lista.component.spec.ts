import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentListaComponent } from './klijent-lista.component';

describe('KlijentListaComponent', () => {
  let component: KlijentListaComponent;
  let fixture: ComponentFixture<KlijentListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
