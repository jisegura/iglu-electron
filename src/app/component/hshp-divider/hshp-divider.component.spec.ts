import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshpDividerComponent } from './hshp-divider.component';

describe('HshpDividerComponent', () => {
  let component: HshpDividerComponent;
  let fixture: ComponentFixture<HshpDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshpDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshpDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
