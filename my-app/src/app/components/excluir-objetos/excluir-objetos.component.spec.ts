import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirObjetosComponent } from './excluir-objetos.component';

describe('ExcluirObjetosComponent', () => {
  let component: ExcluirObjetosComponent;
  let fixture: ComponentFixture<ExcluirObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirObjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
