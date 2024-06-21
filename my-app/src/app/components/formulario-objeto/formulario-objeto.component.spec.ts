import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioObjetoComponent } from './formulario-objeto.component';

describe('FormularioObjetoComponent', () => {
  let component: FormularioObjetoComponent;
  let fixture: ComponentFixture<FormularioObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioObjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
