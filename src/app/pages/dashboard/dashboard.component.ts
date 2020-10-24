import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  user: User;
  firebaseUser: firebase.User;

  todos: Item[];
  itemToEdit: Item;
  priority: number;

  newTask: Item = {
    id: '',
    title: '',
    done: false,
    editing: false,
    listnum: 0
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

}
