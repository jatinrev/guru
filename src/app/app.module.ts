import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
