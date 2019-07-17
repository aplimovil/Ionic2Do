import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from '../task';
//Imports AngularFireDatabase component and AngularFireList to hold items
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//Imports a FirebaseListObservable component to handle database objects
import { Observable } from 'rxjs/Observable';
//This component gives you ability to access and customize the device native dialogs.
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Platform } from 'ionic-angular';

@Component({
  //Selector (tag) to use on main page to load the component
  selector: 'page-home',
  templateUrl: 'tasklist.html'
  //HTML template for the TaskList component
})
//TaskList component class declaration
export class TaskListPage {

  //Defines the tasks array as an Observable object (asynchronous connection to db)
  tasks: Observable<any[]>;
  //Defines an AngularFireList object to hold data
  taskList: AngularFireList<Task>;

  //Receives a reference to Firebase remote db
  //Includes a Dialogs and Platform reference to handle a native Dialog screen
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, private dialogs: Dialogs, private platform: Platform) {
    //Return the data in the tasks sub-directory and store them in taskList
    this.taskList = this.db.list('/tasks');
    //Synchronize with the remote db
    this.tasks = this.taskList.valueChanges();
  }


  addItem() {
    //Checks if running platform is native (Android or iOS Phone)
    if (this.platform.is('cordova')) {
      //Displays a native Dialog window according to background SO look and feel
      this.dialogs.prompt('Add a task', 'Ionic2Do', ['Ok', 'Cancel'], '')
        .then(
          theResult => {
            //If Ok button is pressed and text is not empty ...
            if (theResult.buttonIndex == 1 && theResult.input1 !== '') {
              //Prepares a task item addition in the Firebase database
              const newTaskRef = this.taskList.push({ id: '', title: theResult.input1, status: 'open' });
              //Updates the remote database
              newTaskRef.update({ id: newTaskRef.key });
            }
          }
        )
      //If running platform is not native (local browser for example)    
    } else {
      let theNewTask: string = prompt("New Task");
      //If there is text to insert ...
      if (theNewTask != undefined && theNewTask !== '') {
        //Prepares a task item addition in the Firebase database
        const newTaskRef = this.taskList.push({ id: '', title: theNewTask, status: 'open' });
        //Updates the remote database
        newTaskRef.update({ id: newTaskRef.key });
      }
    }
  }

  //Marks a task as done
  markAsDone(slidingItem: ItemSliding, task: Task) {
    //Update status property of the task
    task.status = "done";
    //Updates the task record in the database
    this.taskList.update(task.id, task)
    //Close the sliding item component
    setTimeout(() => { slidingItem.close(); }, 1);
  }

  //Removes a task from the array
  removeTask(slidingItem: ItemSliding, task: Task) {
    //Update status property of the task
    task.status = "removed";
    //Removes the task record in the database
    this.taskList.remove(task.id);
    //Close the sliding item component
    setTimeout(() => { slidingItem.close(); }, 1);
  }

}
