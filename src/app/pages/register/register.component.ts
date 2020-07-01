import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  passwordConfirm: string;
  busy = false;
  verificationEmailSent = false;

  constructor(
    private auth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  register(... fields: NgModel[]): void {
    if (fields.every(field => field.valid)) {
      this.busy = true;
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          userCredential.user.updateProfile({
            displayName: userCredential.user.email,
            photoURL: 'https://www.gravatar.com/avatar/?d=mp'
          });

          userCredential.user.sendEmailVerification({
            url: window.location.href + '/continue'
          }).then(() => {
            this.busy = false;
            this.verificationEmailSent = true;
          });
        }
      ).catch(err => {
        this.showMessage(err);
        this.busy = false;
      });
    } else if (fields.find(field => field.untouched)) {
      this.showMessage('Please fill out all the fields');
    } else {
      this.showMessage('Please fix the error(s) as indicated');
    }
  }

  showMessage(message: string): void {
    this.snackBar.open(message, null, { duration: 3000 });
  }
}
