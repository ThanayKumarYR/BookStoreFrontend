import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSystemComponent } from './components/login-system/login-system.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginSystemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
