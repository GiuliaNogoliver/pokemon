import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonData(): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/03527904/json/');
  }
}
