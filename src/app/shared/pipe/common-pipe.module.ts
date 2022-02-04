import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListFilter} from "./list-filter.pipe";
import {StringToDate} from "./string-to-date.pipe";
import { StringFormatPipe } from './string-format.pipe';
import { SortByPipe } from './sort-by-pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [StringToDate, ListFilter, StringFormatPipe, SortByPipe, SafePipe],
  exports: [StringToDate, ListFilter, StringFormatPipe, SortByPipe, SafePipe]
})

export class CommonPipeModule {}
