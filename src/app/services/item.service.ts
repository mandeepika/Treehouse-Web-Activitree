import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable, of } from 'rxjs';
import { switchMap, map, first, mergeMap } from "rxjs/operators";
import { auth } from 'firebase/app';
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

}

}
