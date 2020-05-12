import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { GamesComponent } from './pages/games/games.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/continue', component:CreateProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'games', component: GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
