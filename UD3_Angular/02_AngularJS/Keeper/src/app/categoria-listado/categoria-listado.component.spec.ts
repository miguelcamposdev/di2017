import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaListadoComponent } from './categoria-listado.component';

describe('CategoriaListadoComponent', () => {
  let component: CategoriaListadoComponent;
  let fixture: ComponentFixture<CategoriaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
