import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedFieldsComponent } from './requested-fields.component';

describe('RequestedFieldsComponent', () => {
  let component: RequestedFieldsComponent;
  let fixture: ComponentFixture<RequestedFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
