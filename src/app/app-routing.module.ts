import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { GamesComponent } from './pages/games/games.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { QuizCalculusComponent } from './pages/quiz-calculus/quiz-calculus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemorygameComponent } from './pages/memorygame/memorygame.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToDashboard) },
  { path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedInToDashboard) },
  { path: 'register/continue', component: CreateProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'games',
    children: [
      { path: '', component: GamesComponent },
      { path: 'quiz-calculus', component: QuizCalculusComponent },
      { path: 'memory-game', component: MemorygameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
