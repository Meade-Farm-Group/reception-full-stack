import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {FormComponent} from "./component/form/form.component";
import {UserListComponent} from "./component/user-list/user-list.component";


const routes: Routes = [

  {path: '', redirectTo: '', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'signin', component: FormComponent},
  {path: 'user-list', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  DashboardComponent,
  FormComponent,
  UserListComponent
]
