import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpSalesMadeComponent } from './hshp-sales-made.component';

describe('HshpSalesMadeComponent', () => {
  let component: HshpSalesMadeComponent;
  let fixture: ComponentFixture<HshpSalesMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpSalesMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpSalesMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
