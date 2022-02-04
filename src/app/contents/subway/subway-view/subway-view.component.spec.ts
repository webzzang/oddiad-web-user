import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayViewComponent } from './subway-view.component';

describe('SubwayViewComponent', () => {
  let component: SubwayViewComponent;
  let fixture: ComponentFixture<SubwayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
