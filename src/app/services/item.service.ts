import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  itemDoc: AngularFirestoreDocument<Item>
  user: User;
  currentUser: firebase.User;

  constructor(public auth: AngularFireAuth, private service: UserService, public afs: AngularFirestore) {
    //this.items = this.afs.collection('todo-items').valueChanges();
    this.itemsCollection = this.afs.collection('todo-items', ref=> ref.orderBy('listnum'));

    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
   }

  //  getUsers(): Observable<User[]>{
  //   return this.auth.user.pipe(
  //     mergeMap(user => this.service.get(user.uid)), 
  //     mergeMap(user => this.afs.collection<User>('users',ref => ref.where('highSchool', '==', user.highSchool)).valueChanges({idField: 'id'}))
  //   );
  // }

  //this.items = currentUser.items


  // getUsers(): Observable<User[]>{
  //   return this.auth.user.pipe(
  //     mergeMap(user => this.service.get(user.uid))
  //     //mergeMap(user => this.afs.collection<User>('users').valueChanges({idField: 'id'}))
  //   ),
  // }


   getItems(){
     return this.items;
   }

   createItem(item: Item){
     this.itemsCollection.add(item);
   }

   deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`todo-items/${item.id}`);
    this.itemDoc.delete();
   }

   updateItem(item: Item){
    this.itemDoc = this.afs.doc(`todo-items/${item.id}`);
    this.itemDoc.update(item);
    console.log(item.title);
   }
}


