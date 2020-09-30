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

//   // todo is an array of list items
//   todos = [
//     { 
//     title: 'Buy milk', 
//     done: false, 
//     editing: false
//   },
//   { 
//     title: 'Drink milk', 
//     done: false, 
//     editing: false
//   },
// ];

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
    var newTask = {
      title: newTaskLabel,
      done: false,
      editing: false
    }
    this.todos.push(newTask);
    // refresh table here!!!
  }

  deleteTask(task){
    this.todos = this.todos.filter( t=> t.title !== task.title);
  }

  editTask(todo){
    todo.editing = true;
  }

  doneEditing(todo){
    todo.editing = false;
  }

}
