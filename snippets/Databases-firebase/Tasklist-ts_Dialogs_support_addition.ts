/******************************************* Add this code *********************************************/

//This component gives you ability to access and customize the device native dialogs.
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Platform } from 'ionic-angular';

/******************************************* Add this code *********************************************/


export class TaskListPage {

    /***************************************** Update this code *******************************************/

    //Includes a Dialogs and Platform reference to handle a native Dialog screen
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, private dialogs: Dialogs, private platform: Platform) {
    
    /***************************************** Update this code *******************************************/    
    }

}