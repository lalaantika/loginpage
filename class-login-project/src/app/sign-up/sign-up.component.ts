import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string;
  password: string;
  email: string;

  constructor() {
   }

  ngOnInit(): void {
  }

  submitForm(name: HTMLInputElement, password: HTMLInputElement, email: HTMLInputElement): boolean {
    this.name = name.value;
    this.password = password.value;
    this.email = email.value;
    console.log(name.value, password.value, email.value);
    return false;
  }
}
