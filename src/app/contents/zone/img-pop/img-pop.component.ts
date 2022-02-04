import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import * as $ from "jquery";
import * as _ from "lodash";

@Component({
  selector: 'app-product-img-pop',
  templateUrl: './img-pop.component.html',
  styleUrls: ['./img-pop.component.scss']
})
export class ImgPopComponent implements OnInit, AfterViewInit {

  @ViewChild('popSlider') popSlider: ElementRef;
  fileList = [];
  imgList = [];
  title;

  @HostListener('document:keyup.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeDialog();
  }

  constructor(private dialogRef: MatDialogRef<ImgPopComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    if (data) {
      if (_.isEmpty(data['title']) === false) {
        this.title = data['title'];
      }

      if (_.isEmpty(data['fileList']) === false) {
        this.fileList = data['fileList'];
      }

      this.fileList.forEach((file, index) => {
        this.imgList.push(file.path)
      });
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    setTimeout(r=>{
      $(this.popSlider.nativeElement).slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        swipe:true,
        swipeToSlide: true,
        draggable: true,

        touchMove: true,
        touchThreshold: 5,
        pauseOnHover:false,
        pauseOnDotsHover: false,
        pauseOnFocus:false,
        centerMode: true,
        centerPadding: '0px',

        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });
    }, 300)
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
