import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private collection: AngularFirestoreCollection<Game>;

  constructor(firestore: AngularFirestore) {
    this.collection = firestore.collection<Game>('games');
  }

  get(): Observable<Game[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  create(game: Game): void {
    this.collection.add(game);
  }

  delete(game: Game): void {
    this.collection.doc(game.id).delete();
  }
}
