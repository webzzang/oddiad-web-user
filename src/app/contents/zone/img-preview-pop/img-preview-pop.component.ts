import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import * as _ from "lodash";
import * as $ from "jquery";

@Component({
  selector: 'app-img-preview-pop',
  templateUrl: './img-preview-pop.component.html',
  styleUrls: ['./img-preview-pop.component.scss']
})
export class ImgPreviewPopComponent implements OnInit, AfterViewInit {
  @ViewChild('modalImg') modalImg: ElementRef;
  @ViewChild('popSlider') popSlider: ElementRef;
  @ViewChild('formImg') formImg: ElementRef;
  fileList = [];

  constructor(private dialogRef: MatDialogRef<ImgPreviewPopComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    if (data) {
      if (_.isEmpty(data['fileList']) === false) {
        data['fileList'].forEach((file, index) => {
          this.fileList.push(file)
        });
      }
    }
  }


  ngOnInit(): void {
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

      $(this.popSlider.nativeElement).css("height : calc(100vh - 15rem)",);

    }, 300)
  }

  ngAfterViewInit() {

  }


  closeDialog(){
    this.dialogRef.close(false);
  }
}
