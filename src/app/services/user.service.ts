import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import "firebase/firestore";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection: AngularFirestoreCollection<User>;

  constructor(firestore: AngularFirestore) {
    this.collection = firestore.collection<User>('users');
  }

  set(user: User): void {
    const doc = this.collection.doc(user.id);
    delete user.id;
    doc.set(user);
  }
  
  update(user: User): void {
    const doc = this.collection.doc<User>(user.id);
    delete user.id;
    doc.update(user);
  }
}
