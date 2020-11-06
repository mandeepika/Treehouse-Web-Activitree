import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { first, map, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>
  userDoc: AngularFirestoreDocument<User>
  user: User;
  currentUser: firebase.User;
  interests: string[];

  constructor(public auth: AngularFireAuth, private service: UserService, public afs: AngularFirestore) { 
  
  }

  // Explanation:
  // Every user has an interests array (see the firestore structure - https://console.firebase.google.com/u/0/project/activitree-edu/firestore/data~2Fusers~2F0Q5j9TOYHhWmTjAFtNok1zMllJ82)
  // We need to check if any other user's interests match the current logged in user's interests.
  // If they match, we need to display those users on the page.
  // The front-end has already been done for this feature. 
  //  


  // This is what we've tried (it doesn't work)

  getUsers(): Observable<any>{
    return this.auth.user.pipe(
      mergeMap(user => this.service.get(user.uid)),
      mergeMap(user => { const x = user.interests.map(interest => this.afs.collection<User>('users',ref => ref.where('interests', 'array-contains', interest)).valueChanges({idField: 'id'})); return x}),
    );
  }

}

