import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  itemDoc: AngularFirestoreDocument<Item>

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('todo-items').valueChanges();
    this.itemsCollection = this.afs.collection('todo-items', ref => ref.orderBy('listnum', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
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


