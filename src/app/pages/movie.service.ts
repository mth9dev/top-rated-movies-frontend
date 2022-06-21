import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MovieDetail, MoviesResponse, Pagination } from './model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies = new BehaviorSubject<Movie[]>([]);
  private _movieDetail = new BehaviorSubject<MovieDetail | undefined>(undefined);
  private _pagniation = new BehaviorSubject<Pagination | null>(null);

  get movies() {
    return this._movies.asObservable();
  }

  get movieDetail() {
    return this._movieDetail.asObservable();
  }

  get pagination() {
    return this._pagniation.asObservable();
  }

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) { }

  getTopRatedMovies(page: number = 1) {
    return this._http.get<MoviesResponse>(`${environment.tmdbUrl}/movie/top_rated`, {
      params: { api_key: environment.tmdbKey, page: page }
    }).pipe(tap(res => {
      this._movies.next(res.results);
      this._pagniation.next({
        count: res.total_results,
        page: page
      })
    }))
  }

  getMovieDetail(id: number) {
    return this._http.get<MovieDetail>(`${environment.tmdbUrl}/movie/${id}`, {
      params: { api_key: environment.tmdbKey, append_to_response: 'videos' }
    }).pipe(
      tap(res => {        
        this._movieDetail.next(res)
      }),
      catchError(err => {
        throw new Error('error');
      }))
  }
}
