import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './common/filter/filter.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LayoutModule { }
