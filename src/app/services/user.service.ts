import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Updated import
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersPath = '/users'; // Replace with your Firebase path

  constructor(private db: AngularFireDatabase) { } // Make sure AngularFireDatabase is imported correctly

  getUsers(): Observable<any[]> {
    return this.db.list<any>(this.usersPath).valueChanges();
  }
}


