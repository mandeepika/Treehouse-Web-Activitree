import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';
import { User } from '../models/user';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection: AngularFirestoreCollection<User>;

  constructor(firestore: AngularFirestore) {
    this.collection = firestore.collection<User>('users');
  }

  get(firebaseUID: string): Observable<User> {
    console.log('what is returned from get fn',this.collection.doc<User>(firebaseUID).valueChanges());
    return this.collection.doc<User>(firebaseUID).valueChanges();
  }

  set(user: User): void {
    const doc = this.collection.doc<User>(user.id);
    delete user.id;
    doc.set(user);
  }

  update(user: User): void {
    const doc = this.collection.doc<User>(user.id);
    delete user.id;
    doc.update(user);
  }
}
