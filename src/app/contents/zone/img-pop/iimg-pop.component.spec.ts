import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPopComponent } from './img-pop.component';

describe('ImgPopComponent', () => {
  let component: ImgPopComponent;
  let fixture: ComponentFixture<ImgPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
