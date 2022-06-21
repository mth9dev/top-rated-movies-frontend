import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieDetailResolver, MoviesResolver } from './pages/movie.resolver';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full',
      },
      {
        path: 'movies',
        children: [
          {
            path: '',
            component: MoviesComponent,
            resolve: {
              movies: MoviesResolver,
            }
          },
          {
            path: ':id',
            component: MovieDetailComponent,
            resolve: {
              movieDetail: MovieDetailResolver,
            }
          }
        ]
      },
      {
        path: "not-found",
        component: NotFoundComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
