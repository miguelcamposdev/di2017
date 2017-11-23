import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArticulosComponent } from './listado-articulos.component';

describe('ListadoArticulosComponent', () => {
  let component: ListadoArticulosComponent;
  let fixture: ComponentFixture<ListadoArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
