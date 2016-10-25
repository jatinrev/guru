import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  closeResult: string;
  userDetails = {};
  opened_model_obj;
  show_hide_variables = {
    signup_step1 : true
  };
  constructor(private modalService: NgbModal, af: AngularFire) {  }

  ngOnInit() {
    
  }

  open(content) {
    this.opened_model_obj = this.modalService.open(content);
    console.log( this.opened_model_obj );
  }

  nextStep() {
    // console.log(this.userDetails);
    if( !this.show_hide_variables.signup_step1 ) {
      this.show_hide_variables.signup_step1 = true;
      this.opened_model_obj.close();
    } else {
      this.show_hide_variables.signup_step1 = false;
    }
  }


}
