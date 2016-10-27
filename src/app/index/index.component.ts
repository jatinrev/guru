import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.temp1();
  }

  ngOnInit() {
  }

  temp1() {
    let items = this.af.database.list('/list');
    this.items = items;
  }

  temp() {
    let items = this.af.database.list('/list')
      .map(i => {return i});
    console.log(items);
    items.forEach(i=>i.forEach(e=>(console.log(e))));
  }

}
