import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  username: string;
  text:string;

  constructor(private router: Router) {
    //@ViewChild(LogInComponent) login_user;
    //this.username=this.login_user.username;
    this.username='User Name';
    //this.text=title;
   }
  
   logout(){
     console.log("logged user out");
     this.router.navigate(['/home']);
   }
  ngOnInit(): void {
  }

}
