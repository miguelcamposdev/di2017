import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaListadoComponent } from './nota-listado.component';

describe('NotaListadoComponent', () => {
  let component: NotaListadoComponent;
  let fixture: ComponentFixture<NotaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
