import { Component, OnInit } from '@angular/core';
import { finalize, forkJoin, map, Observable, tap, timer } from 'rxjs';
import { removeTail } from 'src/app/core/utils/random-utils';
import { PokedexFacade } from './pokedex.facade';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public pokemonsRandom$!: Observable<any>
  public loading = false;

  constructor(private pokedexFacade: PokedexFacade) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  public getPokemon(): void {
    this.loading = true;

    const minimumLoadingTime = 1000;
    const pokemonsQuantity = 5;
    const randomPokemons$ = this.pokedexFacade.getRandomPokemons(pokemonsQuantity);
    const timer$ = timer(minimumLoadingTime);

    this.pokemonsRandom$ = forkJoin([...randomPokemons$, timer$])
      .pipe(
        map(removeTail),
        finalize(() => (this.loading = false))
      )
  }
}
