import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './app.component';
import {firebase} from '../environments/environment';
import { FirebaseComponent } from './firebase/firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
