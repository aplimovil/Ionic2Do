
/*************************************** Add this code ******************************************/

//Imports AngularFire module to work with Firebase services
import { AngularFireModule } from '@angular/fire';
//Imports AngularFire database module to work with Firebase realtime database service 
import { AngularFireDatabaseModule } from '@angular/fire/database';


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

/*************************************** Add this code ******************************************/


@NgModule({
    declarations: [
        MyApp,
        //TaskListPage component registration
        TaskListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        /*************************************** Update this code ******************************************/

        AngularFireModule.initializeApp(firebaseConfig), //imports firebase/app needed for everything
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features

        /*************************************** Update this code ******************************************/
    ]

