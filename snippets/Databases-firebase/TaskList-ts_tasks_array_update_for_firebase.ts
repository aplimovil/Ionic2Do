export class TaskListPage {

    /******************************* Update this code ********************************/

    //Defines the tasks array as an Observable object (asynchronous connection to db)
    tasks: Observable<any[]>;
    //Defines an AngularFireList object to hold data
    taskList: AngularFireList<Task>;

    //Receives a reference to Firebase remote db
    constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
        //Return the data in the tasks sub-directory and store them in taskList
        this.taskList = this.db.list('/tasks');
        //Synchronize with the remote db
        this.tasks = this.taskList.valueChanges();
    }

    /******************************* Update this code ********************************/

}