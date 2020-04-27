import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  password: string;
  username: string;
  constructor(){
    this.username = 'user';
    this.password = 'pass'
  }
  title = 'class-login-project';
  addlogin(username: string, password: string): boolean {
    console.log(` ${username} and ${password}`);
   
    username = '';
    password = '';
    return false;
  }
}

    



