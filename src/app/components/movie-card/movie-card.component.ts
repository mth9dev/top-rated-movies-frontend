import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/pages/model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;
  
  posterPath = environment.tmdbPosterPath;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToDetails(){
    this._router.navigate(['movies', this.movie.id])
  }

}
