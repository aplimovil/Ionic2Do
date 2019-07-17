import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//Imports the TaskListPage component
import { TaskListPage } from '../pages/tasklist/tasklist';

//Imports AngularFire module to work with Firebase services
import { AngularFireModule } from '@angular/fire';
//Imports AngularFire database module to work with Firebase realtime database service 
import { AngularFireDatabaseModule } from '@angular/fire/database';
//Imports Dialogs component to access and customize the device native dialogs.
import { Dialogs } from '@ionic-native/dialogs/ngx';


/*Firebase configuration parameters. Go to Firebase console and select Add WebApp on the general
description of your project; then, set a name and you will get your App configuration parameters*/
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_URL.firebaseapp.com",
  databaseURL: "https://YOUR_URL.firebaseio.com",
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: "",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};


@NgModule({
  declarations: [
    MyApp,
    //TaskListPage component registration
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //TaskListPage component registration for App loading
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
