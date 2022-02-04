import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPopComponent } from './history-pop.component';

describe('HistoryPopComponent', () => {
  let component: HistoryPopComponent;
  let fixture: ComponentFixture<HistoryPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
