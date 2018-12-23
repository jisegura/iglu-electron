import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpMenuComponent } from './hshp-menu.component';

describe('HshpMenuComponent', () => {
  let component: HshpMenuComponent;
  let fixture: ComponentFixture<HshpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
