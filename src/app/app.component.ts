import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UsersDataService } from './initializer/users-data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Startups';
  constructor(public _auth: AuthService, public _userData: UsersDataService) {}
  ngOnInit(): void {}
}
