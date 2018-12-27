import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminCategoriaDeleteComponent } from './hshp-admin-categoria-delete.component';

describe('HshpAdminCategoriaDeleteComponent', () => {
  let component: HshpAdminCategoriaDeleteComponent;
  let fixture: ComponentFixture<HshpAdminCategoriaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminCategoriaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminCategoriaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
