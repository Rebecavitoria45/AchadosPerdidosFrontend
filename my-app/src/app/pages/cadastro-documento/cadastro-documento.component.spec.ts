import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDocumentoComponent } from './cadastro-documento.component';

describe('CadastroDocumentoComponent', () => {
  let component: CadastroDocumentoComponent;
  let fixture: ComponentFixture<CadastroDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
