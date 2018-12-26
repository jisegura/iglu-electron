import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminMenuComponent } from './hshp-admin-menu.component';

describe('HshpAdminMenuComponent', () => {
  let component: HshpAdminMenuComponent;
  let fixture: ComponentFixture<HshpAdminMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
