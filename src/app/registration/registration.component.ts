import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myform=new FormGroup({
    fname:new FormControl("chippy"),
    lname:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),

    })
  constructor() { }

  ngOnInit(): void {
  }

}
