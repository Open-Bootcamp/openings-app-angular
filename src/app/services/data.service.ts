import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { data } from '../data/data';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getData() {
    const animes$ = of(data)
   return animes$.pipe(
      map((item: Anime[]) => item)
    )

  }
}
