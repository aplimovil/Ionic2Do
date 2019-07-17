/******************************** Add this code *****************************/

//Imports Dialogs component to access and customize the device native dialogs.
import { Dialogs } from '@ionic-native/dialogs/ngx';

/******************************** Add this code *****************************/

@NgModule({
    
    /********************* Update this code ******************/

    providers: [
      StatusBar,
      SplashScreen,
      Dialogs,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]

    /********************* Update this code ******************/

  })