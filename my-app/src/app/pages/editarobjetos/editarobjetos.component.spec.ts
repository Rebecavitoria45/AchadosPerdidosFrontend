import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarobjetosComponent } from './editarobjetos.component';

describe('EditarobjetosComponent', () => {
  let component: EditarobjetosComponent;
  let fixture: ComponentFixture<EditarobjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarobjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarobjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
