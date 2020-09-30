import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('todo-items').valueChanges();
    this.items = this.afs.collection('todo-items').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    });
   }

   getItems(){
     return this.items;
   }
}


