import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MovieCardComponent
  ]
})
export class ComponentsModule { }
