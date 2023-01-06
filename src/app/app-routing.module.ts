import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
];

@NgModule({

  // added hashrouting to navigate on different pages independently on poduction server 
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
