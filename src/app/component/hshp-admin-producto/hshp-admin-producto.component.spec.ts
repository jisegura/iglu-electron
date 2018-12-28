import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminProductoComponent } from './hshp-admin-producto.component';

describe('HshpAdminProductoComponent', () => {
  let component: HshpAdminProductoComponent;
  let fixture: ComponentFixture<HshpAdminProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
