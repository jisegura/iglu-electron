import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminCategoriaPostComponent } from './hshp-admin-categoria-post.component';

describe('HshpAdminCategoriaPostComponent', () => {
  let component: HshpAdminCategoriaPostComponent;
  let fixture: ComponentFixture<HshpAdminCategoriaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminCategoriaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminCategoriaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
