import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirdocumentosComponent } from './excluirdocumentos.component';

describe('ExcluirdocumentosComponent', () => {
  let component: ExcluirdocumentosComponent;
  let fixture: ComponentFixture<ExcluirdocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirdocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirdocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
