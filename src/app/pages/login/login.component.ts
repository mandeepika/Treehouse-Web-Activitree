import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private fireAuth: AngularFireAuth,
    private service: UserService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void { }

  loginWithEmailAndPassword(): void {
    if (this.email && this.password) {
      this.login(fireAuth => fireAuth.signInWithEmailAndPassword(this.email, this.password));
    } else {
      this.showMessage('Email and password cannot be empty');
    }
  }

  loginWithGoogle(): void {
    this.loginWithProvider(new auth.GoogleAuthProvider());
  }

  loginWithFacebook(): void {
    this.loginWithProvider(new auth.FacebookAuthProvider());
  }

  loginWithProvider(provider: auth.AuthProvider): void {
    this.login(fireAuth => fireAuth.signInWithPopup(provider));
  }

  login(signIn: (fireAuth: AngularFireAuth) => Promise<auth.UserCredential>): void {
    signIn(this.fireAuth).then(userCredential =>
      this.service.get(userCredential.user.uid).pipe(first()).subscribe(user =>
        this.router.navigate([user ? '/dashboard' : '/register/continue'])
      )
    ).catch(err =>
      this.showMessage(err)
    );
  }

  showMessage(message: string): void {
    this.snackBar.open(message, null, { duration: 3000 });
  }
}
