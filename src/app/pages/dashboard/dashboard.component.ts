import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  user: User;
  firebaseUser: firebase.User;

  todos: Item[];  // an array of todo items. This array contains Item objects.

  newItem: Item = { // this is an Item object already created. 
    id: '',
    title: '',
    done: false,
    editing: false,
    priority: 0
  }


  constructor(public auth: AngularFireAuth, private service: UserService, private itemservice: ItemService) { }

  //this.itemsCollection = this.afs.collection<Item>('todo-items');

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.firebaseUser = user;
      console.log('my current users uid', this.service.get(this.firebaseUser.uid));
      this.service.get(user.uid).subscribe(user => this.user = user);
    });
    //this.getItems();
  }

  //function skeletons set up below. Edit will come later.

  addItem(){
    // set the properties for newItem here.
    // title = the thing they entered in the input
    // done = false
    // editing = false
    // priority = 1
    // you can leave the id property blank.
    // add this newItem to the todos[] array (figure out how to add an element to an array in typescript)
    // call this.itemservice.addTask() to add the item to the firestore todo-items collection.
  }

  deleteItem(){
    // remove the item from the array
    // call this.itemservice.deleteTask() to remove the task from the firestore todo-items collection.
  }

}
