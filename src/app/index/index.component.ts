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

  constructor(af: AngularFire) {
    let items = af.database.list('/list')
      .map(i => {return i});
      
    items.forEach(i=>i.forEach(e=>(console.log(e))));
  }

  ngOnInit() {
  }

}
