import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpCustomerSupportComponent } from './hshp-customer-support.component';

describe('HshpCustomerSupportComponent', () => {
  let component: HshpCustomerSupportComponent;
  let fixture: ComponentFixture<HshpCustomerSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpCustomerSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
