import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Title} from "@angular/platform-browser";
import {DateAdapter} from "@angular/material/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = 'Sign-in';
  userForm !: FormGroup;
  actionBtn: string = 'Submit';
  //isDeparted = 1; //signed_out
  departureTime = new Date();
  arrivalTime = new Date();


  formTitle = "Sign-In";
  myArrivalTime: any;


  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private dateAdapter: DateAdapter<Date>, private titleService: Title, private datePipe: DatePipe) {
    this.dateAdapter.setLocale('en-GB'); //sets the locale to
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      arrival_time: ['', Validators.required],
      //arrival_time: [this.datePipe, Validators.required],

      //departure_time: [this.isDeparted],
      //departure_time: [this.departureTime, Validators.required], //might need this in the future
      departure_time: ['', Validators.required], //might need this in the future
      guest_name: ['', Validators.required],
      guest_company: ['', Validators.required],
      phone_number: ['', Validators.required],
      host_employee: ['', Validators.required],
      area: ['', Validators.required],

    });
    console.log("This is departure time " + this.departureTime);
    //console.log("THIS IS THE NEW TIME "+);
    this.titleService.setTitle(this.formTitle);
    this.myArrivalTime = formatDate(this.arrivalTime, 'dd/MM/yyyy hh:mm:ss a', 'en-gb');
    //this.myArrivalTime = this.arrivalTime;
    //this.myArrivalTime = this.datePipe.transform(this.arrivalTime, 'medium', 'EN-GB')

  }


  addUser() {
    this.userService.postUserForm(this.userForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.userForm.reset();
      },
      error: () => {
        alert("Error while adding the product")
      }
    })
  }//addUser()



}
