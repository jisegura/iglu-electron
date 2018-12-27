import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminCategoriaPutComponent } from './hshp-admin-categoria-put.component';

describe('HshpAdminCategoriaPutComponent', () => {
  let component: HshpAdminCategoriaPutComponent;
  let fixture: ComponentFixture<HshpAdminCategoriaPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminCategoriaPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminCategoriaPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
