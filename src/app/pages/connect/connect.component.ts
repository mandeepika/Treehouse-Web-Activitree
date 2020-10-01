import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private connectservice: ConnectService) { }
  users: User[];

  ngOnInit(): void {
    this.connectservice.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
