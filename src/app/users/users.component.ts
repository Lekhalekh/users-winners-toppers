import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.users$ = this.db.list<any>('/users').valueChanges();
  }
}

