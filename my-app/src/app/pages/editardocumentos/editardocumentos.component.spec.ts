import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditardocumentosComponent } from './editardocumentos.component';

describe('EditardocumentosComponent', () => {
  let component: EditardocumentosComponent;
  let fixture: ComponentFixture<EditardocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditardocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditardocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
