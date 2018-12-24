import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpProductsOrderComponent } from './hshp-products-order.component';

describe('HshpProductsOrderComponent', () => {
  let component: HshpProductsOrderComponent;
  let fixture: ComponentFixture<HshpProductsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpProductsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpProductsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
