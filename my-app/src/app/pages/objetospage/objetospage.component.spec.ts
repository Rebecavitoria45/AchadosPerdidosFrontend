import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetospageComponent } from './objetospage.component';

describe('ObjetospageComponent', () => {
  let component: ObjetospageComponent;
  let fixture: ComponentFixture<ObjetospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjetospageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
