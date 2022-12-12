import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormComponent } from './component/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UserService} from "./service/user.service";
import { HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
    FormComponent,
    routingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,

  ],
  providers: [UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
