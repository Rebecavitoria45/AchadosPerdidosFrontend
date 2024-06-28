import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrardetalhesobjetosComponent } from './mostrardetalhesobjetos.component';

describe('MostrardetalhesobjetosComponent', () => {
  let component: MostrardetalhesobjetosComponent;
  let fixture: ComponentFixture<MostrardetalhesobjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrardetalhesobjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrardetalhesobjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
