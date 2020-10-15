import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>
  userDoc: AngularFirestoreDocument<User>
  user: User;
  currentUser: firebase.User;

  constructor(public auth: AngularFireAuth, private service: UserService, public afs: AngularFirestore) { 
      //var myHighSchool = firebase.auth().currentUser.highSchool

      //console.log('PRINTING THE CURRENT USER',this.auth.currentUser);

      // this.auth.user.subscribe(user => {
      //   this.currentUser = user;
      //   this.service.get(user.uid).subscribe(user => {
      //     this.user = user;
      //     console.log('UserData ',this.user);
      //     this.myHighSchool = this.user.highSchool; //works till here

      //     this.usersCollection = this.afs.collection('users',ref => ref.where('highSchool', '==', 'Foothill High School'));

      //     this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      //       return changes.map(a => {
      //         const data = a.payload.doc.data() as User;
      //         data.id = a.payload.doc.id;
      //         return data;
      //       })
      //       //console.log(this.users);
      //     }));
      //   });
      // });
  }

  getUsers(): Observable<User[]>{
    return this.auth.user.pipe(
      mergeMap(user => this.service.get(user.uid)), 
      mergeMap(user => this.afs.collection<User>('users',ref => ref.where('highSchool', '==', user.highSchool)).valueChanges({idField: 'id'}))
    );
  }
}

