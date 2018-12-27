import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpAdminCategoriaComponent } from './hshp-admin-categoria.component';

describe('HshpAdminCategoriaComponent', () => {
  let component: HshpAdminCategoriaComponent;
  let fixture: ComponentFixture<HshpAdminCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpAdminCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpAdminCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
