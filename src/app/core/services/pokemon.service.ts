import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  public getPokemonById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.pokemonAPI}/${id}`);
  }
}
