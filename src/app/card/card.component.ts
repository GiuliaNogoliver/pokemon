import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  jsonData: any;
  http: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonData().subscribe(response => {
      console.log('Resposta do serviço:', response);
      this.jsonData = response;
    });
  }

  getPokemonData(): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/03527904/json/')
      .pipe(
        tap(response => console.log('Resposta do serviço:', response))
      );
  }
}
