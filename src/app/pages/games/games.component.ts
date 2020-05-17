import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.games = this.service.get();
  }

  delete(game: Game): void {
    this.service.delete(game);
  }

}
