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
  title = 'class-login-project';
  addlogin(username: string, password: string):any {
    console.log(` ${username} and ${password}`);
   
    this.username = this.username
    this.password = this.password
   
  }
  ngOnInit(): void {
  }

}
