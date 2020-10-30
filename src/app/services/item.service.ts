import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { switchMap, map, first, mergeMap } from "rxjs/operators";
import { auth, functions } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  itemDoc: AngularFirestoreDocument<Item>
  //user: User;
  user: Observable<any>;
  currentUser: firebase.User;

  constructor(public auth: AngularFireAuth, private service: UserService, public afs: AngularFirestore) {

  // This is the file that interacts with firestore. Here, you can write add, delete, and update functions.
  // I've set up skeletons for them below.

  //addTask(){
    //add an item to the todo-items collection here.
  //}

  //deleteTask(){
    //delete an item from the todo-items collection here.
  //}

  //This is how you can access the todo-items collection for now:. (That long string is a temporary user id).
  //Later, we'll have to change it to the current user's ID
  //afs.collection('users').doc('0Q5j9TOYHhWmTjAFtNok1zMllJ82').collection('todo-items');
  
}

}
