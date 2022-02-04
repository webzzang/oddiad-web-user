import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPreviewPopComponent } from './img-preview-pop.component';

describe('ImgPreviewPopComponent', () => {
  let component: ImgPreviewPopComponent;
  let fixture: ComponentFixture<ImgPreviewPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPreviewPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPreviewPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
