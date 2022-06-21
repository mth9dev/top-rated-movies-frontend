import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
