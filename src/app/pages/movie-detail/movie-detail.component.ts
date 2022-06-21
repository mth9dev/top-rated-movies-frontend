import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: MovieDetail | undefined;
  posterPath = environment.tmdbPosterPath;

  genresText: string = '';
  trailerKey: string = '';

  constructor(
    private _movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this._movieService.movieDetail.subscribe(movie => {
      this.movie = movie;
      console.log(this.movie)
      if (this.movie){
        this.genresText = this.movie?.genres.map(el => el.name).join(', ');
        this.trailerKey = this.movie.videos.results.find(el => el.official == true && el.type == 'Trailer')?.key || '';
      }
    })
  }

}
