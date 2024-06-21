import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusitensComponent } from './meusitens.component';

describe('MeusitensComponent', () => {
  let component: MeusitensComponent;
  let fixture: ComponentFixture<MeusitensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeusitensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
