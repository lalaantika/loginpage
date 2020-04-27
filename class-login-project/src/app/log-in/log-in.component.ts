import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  password: string;
  username: string;
  title:string;
  constructor(){
    this.username = this.username;
    this.password = this.password;
    this.title = 'class-login-project';
  }
  
  addlogin(username: string, password: string): boolean {
    console.log(` ${username} and ${password}`);
   
    username = '';
    password = '';
    return false;
  }

  ngOnInit(): void {
  }

}
