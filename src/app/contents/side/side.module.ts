import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    RouterModule
  ],
  declarations: [
    TopComponent,
    FooterComponent
  ],
  entryComponents: [
    TopComponent,
      FooterComponent
  ],
  exports: [
    TopComponent,
    FooterComponent

  ]
})
export class SideModule { }
