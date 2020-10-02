import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private service: UserService, private connectservice: ConnectService) { }
  users: User[];
  user: User;
  currentUser: firebase.User;


  ngOnInit(): void {
    this.connectservice.getUsers().subscribe(users => {
      this.auth.user.subscribe(user => {
        this.users = users.filter(x => x.id !== user.uid);
        console.log(this.users, user.uid);
      });
    });
  }

}
