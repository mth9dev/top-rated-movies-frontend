import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { SubSink } from 'subsink';
import { Movie, Pagination } from '../model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit {

  movies: Movie[] = [];

  pagination: Pagination | null = null;

  private _subs = new SubSink();

  isLoading: boolean = false

  @ViewChild(MatPaginator) private _paginator: MatPaginator | null = null;

  constructor(
    private _movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this._subs.sink = this._movieService.movies.subscribe(movies => {
      this.movies = movies;
    })

    this._subs.sink = this._movieService.pagination.subscribe(pg => {
      this.pagination = pg;
    })


  }

  ngAfterViewInit(): void {
    this._subs.sink = this._paginator?.page.subscribe(() => {
      this.isLoading = true;
      this._movieService.getTopRatedMovies(this._paginator?.pageIndex)
        .pipe(tap(() => {
          this.isLoading = false;
        })).subscribe();
    })
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
