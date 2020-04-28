import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  password: string;
  username: string;
  title:string;
  constructor(private router: Router){
    this.username = this.username;
    this.password = this.password;
    this.title = 'class-login-project';
  }
  
  addlogin(username: HTMLInputElement, password: HTMLInputElement): boolean {
    console.log(`${username.value} and ${password.value}`);
    this.router.navigate(['/logout']);
    return false;
  }

  ngOnInit(): void {
  }

}
