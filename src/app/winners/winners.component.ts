import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  winners$!: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.winners$ = this.db.list<any>('/winners').valueChanges();
  }
}


