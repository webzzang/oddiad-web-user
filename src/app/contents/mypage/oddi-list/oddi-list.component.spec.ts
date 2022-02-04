import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddiListComponent } from './oddi-list.component';

describe('OddiListComponent', () => {
  let component: OddiListComponent;
  let fixture: ComponentFixture<OddiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
