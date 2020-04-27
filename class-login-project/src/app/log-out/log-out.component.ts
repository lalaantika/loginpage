import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  username: string;
  text:string;

  constructor() {
    this.username="User Name Goes Here";
    //this.text=title;
   }
  
   logout(){
     console.log("logged user out");
   }
  ngOnInit(): void {
  }

}
