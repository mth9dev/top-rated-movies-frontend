import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "./movie.service";

@Injectable({
    providedIn: 'root',
})
export class MoviesResolver implements Resolve<any> {

    constructor(private _movieService: MovieService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this._movieService.getTopRatedMovies();
    }
}

@Injectable({
    providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<any> {

    constructor(private _movieService: MovieService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this._movieService.getMovieDetail(route.params['id']);
    }
}