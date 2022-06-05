import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingHomeComponent } from './components/loading-home/loading-home.component';

const routes: Routes = [
  {path: 'login' ,  component: LoginComponent},
  {path: '' , redirectTo: '/login' , pathMatch: 'full'},
  {path: 'loading-home' , component: LoadingHomeComponent},
  {path:'home' , component: HomeComponent},
  {path: '**' , component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
