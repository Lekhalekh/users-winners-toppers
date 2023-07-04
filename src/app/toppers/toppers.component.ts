import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {
  toppers$: Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]> | undefined;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    const queryFn = (ref: any) => ref.orderByChild('score').startAt(90);
    this.toppers$ = this.db.list<AngularFireAction<firebase.default.database.DataSnapshot>>('/users', queryFn).snapshotChanges();
  }
}

