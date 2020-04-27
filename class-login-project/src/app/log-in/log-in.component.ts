import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  password: string;
  username: string;
  
  constructor(){
   
   
  }
  
  //addlogin(username: string, password: string): boolean {
   // console.log(` ${username} and ${password}`);
   
    //username = '';
    //password = '';
    //return false;
 // }
 ngOnInit(): void {
}
 
  addlogin(username: HTMLInputElement, password: HTMLInputElement): boolean {
    this.username= username.value;
    this.password = password.value; 
    console.log(username.value, password.value);
    return false;
  }
}
