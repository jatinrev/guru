import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  closeResult: string;
  userDetails = {
    email : '',
    password : ''
  };
  opened_model_obj;
  show_hide_variables = {
    signup_step1 : true
  };
  
  //temp variables
  firebase_data;


  constructor(private modalService: NgbModal,public af: AngularFire) { 
    this.insert_user();
    /*this.firebase_data = this.af.database.list('/users_details');

    this.firebase_data.push({
      user : 
    });
      /*.subscribe(function(res) {
        console.log( res );
        this.firebase_data = {
          name : res.name
        };
      });*/
    /*this.firebase_data = this.af.database.object('/users_details/iZndzXKql7Zr3YQsLeNdd9cRU6J2');
    console.log(this.firebase_data);*/
  }

  ngOnInit() {
  }

  open(content) {
    this.opened_model_obj = this.modalService.open(content);
  }

  nextStep() {
    if( !this.show_hide_variables.signup_step1 ) {
      // "Done"
      this.show_hide_variables.signup_step1 = true;

      this.opened_model_obj.close();
    } else {
      // "NEXT STEP"
      this.show_hide_variables.signup_step1 = false;
    }
  }

  insert_user() {
    this.firebase_data = this.af.database.list('/');
    /*
    this.firebase_data.push({
      users_details : {
        12 : {
          user : 'Pushker'
        }
      }
    });*/
  }

  login_by_password() {
    console.log(this.userDetails);
    this.af.auth.createUser({
      email: this.userDetails.email,
      password: this.userDetails.password
    }).then(function(success) {
      console.log(success);
    }, function(err) {
      console.log(err);
    });
  }


}
