import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, tap } from 'rxjs';
import { generateRandomNumber } from 'src/app/core/utils/random-utils';
import { PokemonService } from '../../core/services/pokemon.service';
import { calculatePokemonProps } from '../../core/utils/pokemon';

@Injectable()
export class PokedexFacade {

  constructor(private pokemonService: PokemonService) { }

  public getRandomPokemon(): Observable<any> {
    const randomPokemonId = generateRandomNumber(1, 150);
    return this.pokemonService.getPokemonById(randomPokemonId)
      .pipe(map(calculatePokemonProps));
  }

  public getRandomPokemons(quantity: number): Observable<any>[] {
    const generateObservables = generateHttpCalls(quantity);
    return generateObservables(this.getRandomPokemon.bind(this))
  }
}

export const generateHttpCalls = (quantity: number): Function => (fn: Function): Observable<any>[] => {
  const calls: Observable<any>[] = [];
  for (let index = 0; index < quantity; index++) {
    calls.push(fn());
  }
  return calls;
}