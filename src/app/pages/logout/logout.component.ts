import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  busy: boolean = true;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.signOut().then(() => this.busy = false);
  }

}
