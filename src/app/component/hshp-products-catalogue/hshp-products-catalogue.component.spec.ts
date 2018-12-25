import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpProductsCatalogueComponent } from './hshp-products-catalogue.component';

describe('HshpProductsCatalogueComponent', () => {
  let component: HshpProductsCatalogueComponent;
  let fixture: ComponentFixture<HshpProductsCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpProductsCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpProductsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
