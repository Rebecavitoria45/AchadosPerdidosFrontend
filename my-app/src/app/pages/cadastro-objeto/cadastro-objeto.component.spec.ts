import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroObjetoComponent } from './cadastro-objeto.component';

describe('CadastroObjetoComponent', () => {
  let component: CadastroObjetoComponent;
  let fixture: ComponentFixture<CadastroObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroObjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
