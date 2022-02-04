import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit, EventEmitter
} from '@angular/core';
import * as $ from "jquery";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-datepk',
  templateUrl: './datepk.component.html',
  styleUrls: ['./datepk.component.scss']
})
export class DatepkComponent implements OnInit, AfterViewInit {

  @Input() date;
  @Input() required;
  @Input() name;
  @Input() min;
  @Input() max;
  @Output('selectDate') selectDate: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('datepk') datepicker: ElementRef;

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show("main");
    setTimeout(() => {
      $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOtherMonths: true,
        buttonImageOnly: true
      });

      $(this.datepicker.nativeElement).datepicker();
      $(this.datepicker.nativeElement).datepicker('setDate',this.date);

      $(this.datepicker.nativeElement).datepicker("option", {
        "minDate": this.min
        ,"maxDate" : this.max
      });

      $(this.datepicker.nativeElement).datepicker("option", {
        onSelect: (date, inst) => {
          this.selectDate.emit(date)
        }
      });
      this.spinnerService.hide('main');
    }, 1500)
  }

  ngAfterViewInit() {

  }

  dateImgClick(){
    $(this.datepicker.nativeElement).datepicker('show');
  }
}
