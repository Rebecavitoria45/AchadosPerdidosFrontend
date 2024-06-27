import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentospageComponent } from './documentospage.component';

describe('DocumentospageComponent', () => {
  let component: DocumentospageComponent;
  let fixture: ComponentFixture<DocumentospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentospageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
