import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  username: string;

  constructor() {
    this.username="User";
   }

  ngOnInit(): void {
  }

}
