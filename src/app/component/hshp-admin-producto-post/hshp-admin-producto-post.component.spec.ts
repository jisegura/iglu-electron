import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminProductoPostComponent } from './hshp-admin-producto-post.component';

describe('HshpAdminProductoPostComponent', () => {
  let component: HshpAdminProductoPostComponent;
  let fixture: ComponentFixture<HshpAdminProductoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminProductoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminProductoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
