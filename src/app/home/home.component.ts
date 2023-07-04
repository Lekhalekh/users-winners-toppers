import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Update the path based on your project structure

interface User {
  name: string;
  age: number;
  score: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
