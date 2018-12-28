import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminProductoPutComponent } from './hshp-admin-producto-put.component';

describe('HshpAdminProductoPutComponent', () => {
  let component: HshpAdminProductoPutComponent;
  let fixture: ComponentFixture<HshpAdminProductoPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminProductoPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminProductoPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
