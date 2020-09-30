import { Component, OnInit } from '@angular/core';
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

  user: User;
  firebaseUser: firebase.User;

  todos: Item[];
  itemToEdit: Item;

  newTask: Item = {
    title: '',
    done: false,
    editing: false
  }

// todoTitle: string;


  constructor(public auth: AngularFireAuth, private service: UserService, private itemservice: ItemService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.firebaseUser = user;
      this.service.get(user.uid).subscribe(user => this.user = user);
    });
    this.itemservice.getItems().subscribe(items => {
      //console.log(items);
      this.todos = items;
    });
  }

  addTask(newTaskLabel){
    if (newTaskLabel != ''){
      this.itemservice.createItem(this.newTask);
      console.log(this.newTask.title);
      this.newTask.title = '';
    }
  }

  deleteTask(task: Item){
    task.editing = false;
    //this.todos = this.todos.filter( t=> t.title !== task.title);
    this.itemservice.deleteItem(task);
  }

  editTask(todo: Item){
    todo.editing = true;
    // this.itemToEdit = todo;
    this.itemservice.updateItem(todo);
  }

  doneEditing(todo: Item){
    todo.editing = false;
    // this.itemToEdit = null;
  }

}
