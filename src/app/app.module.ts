import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { GuruManageClassComponent } from './guru-manage-class/guru-manage-class.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactUsComponent,
    StudentListComponent,
    UserProfileComponent,
    StudentDetailComponent,
    GuruManageClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    NgbModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'student-list',
        component: StudentListComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      },
      {
        path: 'student-detail',
        component: StudentDetailComponent
      },
      {
        path: 'guru-manage-class',
        component: GuruManageClassComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
