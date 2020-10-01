import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>
  userDoc: AngularFirestoreDocument<User>

  constructor(public afs: AngularFirestore) { 
      //var myHighSchool = firebase.auth().currentUser.highSchool;
      this.usersCollection = this.afs.collection('users',ref => ref.where('highSchool', '==', 'Foothill High School'));

      this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as User;
          data.id = a.payload.doc.id;
          return data;
        })
      }));
  }

  getUsers(){
    return this.users;
  }
}
