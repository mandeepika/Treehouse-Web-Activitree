import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  firebaseUser: firebase.User;

  constructor(public auth: AngularFireAuth, private service: UserService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.firebaseUser = user;
      this.service.get(user.uid).subscribe(user => this.user = user);
    });
  }
}
