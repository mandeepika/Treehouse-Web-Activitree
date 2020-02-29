import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public auth: AngularFireAuth) {
  }

  loginWithEmailAndPassword() {
    this.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  ngOnInit(): void {
  }

}
