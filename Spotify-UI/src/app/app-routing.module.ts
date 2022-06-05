import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { HomeComponent } from './comp/home/home.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
