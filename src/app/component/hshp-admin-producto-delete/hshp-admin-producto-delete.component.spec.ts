import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminProductoDeleteComponent } from './hshp-admin-producto-delete.component';

describe('HshpAdminProductoDeleteComponent', () => {
  let component: HshpAdminProductoDeleteComponent;
  let fixture: ComponentFixture<HshpAdminProductoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminProductoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminProductoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
