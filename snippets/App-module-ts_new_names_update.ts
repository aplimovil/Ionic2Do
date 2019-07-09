
/***************************** Update this code ************************/

//Change this block:
import { HomePage } from '../pages/home/home';

//by:
//Imports the TaskListPage component
import { TaskListPage } from '../pages/tasklist/tasklist';

/***************************** Update this code ************************/


/***************************** Update this code ************************/

@NgModule({
    declarations: [
      MyApp,
      //TaskListPage component registration
      TaskListPage
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp)
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
      { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
  })

/***************************** Update this code ************************/